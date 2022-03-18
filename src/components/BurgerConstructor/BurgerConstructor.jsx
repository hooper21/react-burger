import React, { useState } from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerElementCard from "../BurgerElementCard/BurgerElementCard";
import OrderDetails from "../OrderDetails/OrderDetails";
import Modal from "../Modal/Modal";

import { OrderContext } from '../../services/AppContext';

import {orderPropTypes} from '../../utils/types';

import styles from './BurgerConstructor.module.css';

const BurgerConstructor = () => {

    const { order } = React.useContext(OrderContext);

    const [ showDetails, setShowDetails ] = useState(false);

    const { items } = order;
    if (!items || !items.length) return null;

    const bun = items.find((item) => item.type === "bun");
    const bunTop = {...bun, name: bun.name + " (верх)"};
    const bunBottom = {...bun, name: bun.name + " (низ)"};

    return (
        <section className={`${styles.container} mt-25`} id="burger-constructor">
            <ul className={styles.list}>
                <BurgerElementCard item={bunTop} state="top" />
            </ul>
            <ul className={`${styles.list} scroller mr-6`}>
                {
                    items.filter((item) => item.type !== "bun").map((item, index) => (
                        <BurgerElementCard key={index} item={item} />
                    ))
                }
            </ul>
            <ul className={styles.listBottom}>
                <BurgerElementCard item={bunBottom} state="bottom" />
            </ul>
                
            <div className={`${styles.order} mt-10 mr-6`}>
                <p className="text text_type_digits-medium">{order.total}</p>
                <div className={`ml-2 mr-10 ${styles.currency_icon}`}>
                    <CurrencyIcon type="primary"/>
                </div>
                {/* лучше отправлять заказ при клике на кнопку отправки заказа, а не при появлении попапа заказа. */}
                <Button type="primary" size="large" onClick={() => setShowDetails(true)}>
                    Оформить заказ
                </Button>
            </div>

            
            {
                (showDetails) && (
                    <Modal onClose={() => setShowDetails(false)}>
                        {/* TODO: лучше не делать в каждом ингредиенте по модальному окну. Нужно было сделать одно окно для деталей в BurgerIngredients и передавать в каждый   ингредиент функцию клика, в которой бы назначались данные для показа в окне */}
                        <OrderDetails order={order} />
                    </Modal>
                )
            }

        </section>
    )
}

export default BurgerConstructor;