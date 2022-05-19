import { useHistory } from "react-router-dom";
import { useDrop } from "react-dnd";
import { getOrderSuccess, hideOrderErrors } from "../../../services/actions/order";
import { clearBurger, setBurgerBun, addBurgerIngredient, removeBurgerIngredient } from "../../../services/actions/burger";
import { getOrderNumber } from "../../../services/DataService";

import { useAppSelector, useAppDispatch } from '../../../services/types/hooks';

import { TIngredient } from "../../../utils/types";
import { TRootStore } from "../../../services/reducers/rootReducer";

import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { LockIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import BurgerElementCard from "../BurgerElementCard/BurgerElementCard";
import OrderDetails from "../OrderDetails/OrderDetails";
import Modal from "../../../ui/Modal/Modal";

import styles from './BurgerConstructor.module.css';

const BurgerConstructor = () => {
    const burger = useAppSelector((store: TRootStore) => store.burger);
    const order = useAppSelector((store: TRootStore) => store.order);
    const ingredients = useAppSelector((store: TRootStore) => store.ingredients.items);
    const { user } = useAppSelector((store: TRootStore) => store.account);
    const history = useHistory();
    const dispatch = useAppDispatch();

    const [, dropIngredientsRef] = useDrop({
        accept: "ingredient",
        drop(item: TIngredient) {
            if (item.type === "bun") {
                dispatch(setBurgerBun(item._id));
            } else {
                dispatch(addBurgerIngredient(item._id));
            };
        },
    });

    if ( order.error ) {
        return (
            <Modal onClose={() => dispatch(hideOrderErrors())}>
                <p className="text text_type_main-medium mb-15">Ошибка приложения</p>
                <span className={styles.icon + " mb-15"}>
                    <LockIcon type="primary" />
                </span>
                <p className="text text_type_main-default mb-2">
                    { order.error }
                </p>
                <p className="text text_type_main-default text_color_inactive">
                    Повторите попытку позже
                </p>
            </Modal>
        );
    };

    const onOrderOpen = () => {
        dispatch(getOrderNumber([burger.bun ?? "", ...Object.keys(burger.items).map((uuid) => burger.items[uuid])]));
    };

    const onClickLogin = () => {
        history.replace({ pathname: "/login" });
    };

    const onOrderClose = () => {
        dispatch(clearBurger());
        dispatch(getOrderSuccess(null));
    };
    
    const findIngredient = (id: string) => ((id) ? ingredients.find((item: TIngredient) => item._id === id) : null);
    const bunItem = findIngredient(burger.bun ?? "");

    const burgerCost = ((bunItem?.price ?? 0) * 2) + Object.keys(burger.items).reduce((total, id) => total + (findIngredient(burger.items[id])?.price ?? 0), 0);

    return (
        <section ref={dropIngredientsRef} className={`${styles.container} mt-25`} id="burger-constructor">
            <ul className={styles.listTop}>
                {
                    (bunItem) ? (
                        <BurgerElementCard item={{ ...bunItem, name: bunItem.name + " (верх)" }} state="top" />
                    ) : null
                }
            </ul>
            
            <ul className={`${styles.list} scroller mr-6`}>
                {
                    (Object.keys(burger.items).length === 0) ? (
                        <p className={styles.emptyItems}>
                            Соберите свой Steller Burger
                        </p>
                    ) : (
                        Object.keys(burger.items).map((id) => {
                            const uuid = burger.items[id];
                            const item = findIngredient(uuid);
                            if (!item) {
                                return null;
                            };
                            return (
                                <BurgerElementCard key={uuid} index={uuid} item={item} onRemove={() => dispatch(removeBurgerIngredient(uuid))} />
                            )
                        })
                    )
                }
            </ul>
            
            <ul className={styles.listBottom}>
                {
                    (bunItem) ? (
                        <BurgerElementCard item={{...bunItem, name: bunItem.name + " (низ)" }} state="bottom" />
                    ) : null
                }
            </ul>
                
            <div className={`${styles.order} mt-10 mr-6`}>
                <p className="text text_type_digits-medium">{burgerCost}</p>
                <div className={`ml-2 mr-10 ${styles.currency_icon}`}>
                    <CurrencyIcon type="primary"/>
                </div>
                {
                    (user) ? (
                        <Button type="primary" size="large" onClick={onOrderOpen} disabled={(burgerCost === 0)}>
                            Оформить заказ
                        </Button>
                    ) : (
                        <Button type="primary" size="large" onClick={onClickLogin}>
                            Авторизайтесь
                        </Button>
                    )
                }
            </div>
            
            {
                (order.order) && (
                    <Modal onClose={onOrderClose}>
                        <OrderDetails order={order.order} />
                    </Modal>
                )
            }

        </section>
    )
}

export default BurgerConstructor;