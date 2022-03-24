import { Fragment,  useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setCurrentTab, setCurrentIngredient, hideIngredientsErrors } from "../../../services/actions/ingredients";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { LockIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";

import Modal from '../../../ui/Modal/Modal';
import BurgerIngredientCard from "../BurgerIngredientCard/BurgerIngredientCard";
import IngredientDetails from '../IngredientDetails/IngredientDetails';

import styles from './BurgerIngredients.module.css';

const BurgerIngredients = () => {

    const ingredients = useSelector((store) => store.ingredients);
    const { error, currentTab } = ingredients;
    const burger = useSelector((store) => store.burger);
    const currentIngredient = useSelector((store) => store.currentIngredient);
    const dispatch = useDispatch();

    const tabs = {
        "bun": "Булки",
        "sauce": "Соусы",
        "main": "Начинки",
    };

    const containerRef = useRef(null);
    const tabRefs = {
        "bun": useRef(null),
        "sauce": useRef(null),
        "main": useRef(null),
    };

    const handleTabClick = (type) => {
        dispatch(setCurrentTab(type));
        var tagRef = tabRefs[type].current ?? null;
        return tagRef && tagRef.scrollIntoView();
    };

    const onScroll = () => {
        const containerTop = containerRef.current.getBoundingClientRect().y;
        let nextTab = "bun";
        for (let tab in tabRefs) {
            const tagTop = tabRefs[tab].current.getBoundingClientRect().y;
            if (containerTop >= tagTop) {
                nextTab = tab;
            };
        };
        if (nextTab !== currentTab) {
            dispatch(setCurrentTab(nextTab));
        };
    };
    
    if ( error ) {
        return (
            <Modal onClose={() => dispatch(hideIngredientsErrors())}>
                <p className="text text_type_main-medium mb-15">Ошибка приложения</p>
                <span className={styles.icon + " mb-15"}>
                    <LockIcon type="primary" />
                </span>
                <p className="text text_type_main-default mb-2">
                    { error }
                </p>
                <p className="text text_type_main-default text_color_inactive">
                    Повторите попытку позже
                </p>
            </Modal>
        );
    };

    return (

        <section>
            
            <h1 className="mt-10 mb-5 text text_type_main-large">Соберите бургер</h1>
            
            <nav className={`${styles.tabs} mt-5 mb-10`}>
                {
                    Object.keys(tabs).map((type) => (
                        <Tab key={type} active={type === currentTab} onClick={() => handleTabClick(type)}>
                            {tabs[type]}
                        </Tab>
                    ))
                }
            </nav>

            <div className="scroller" ref={containerRef} onScroll={onScroll} >
                {
                    Object.keys(tabs).map((type) => (
                        <Fragment key={type}>
                            <h2 className="mt-10 text text_type_main-medium" ref={tabRefs[type]}>
                                { tabs[type] }
                            </h2>
                            <ul className={styles.list}>
                                {
                                    ( ingredients.items.length ) ?
                                    ( ingredients.items.map((item) => {
                                        const count = (item.type === "bun") ? ((burger.bun === item._id) ? 1 : 0) : Object.keys(burger.items).filter((uuid) => burger.items[uuid] === item._id).length;
                                        return (item.type === type) ?
                                                (
                                                    <li key={item._id} className={`${styles.card} mt-6 mb-2 ml-4 mr-2`}>
                                                        <BurgerIngredientCard item={item} count={count} />
                                                    </li>
                                                ) : null;
                                    })) : null
                                }
                            </ul>
                        </Fragment>
                    ))
                }
            </div>
    
            {
                ( currentIngredient ) ? (
                    <Modal onClose={() => dispatch(setCurrentIngredient(null))} title="Детали ингредиента">
                        <IngredientDetails item={currentIngredient} />
                    </Modal>
                ) : null
            }

        </section>
    )
}

export default BurgerIngredients;