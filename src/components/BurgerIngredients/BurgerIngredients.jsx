import React, { Fragment, useRef } from 'react';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientCard from "../BurgerIngredientCard/BurgerIngredientCard";

import { IngredientsContext, OrderContext } from '../../services/AppContext';

import styles from './BurgerIngredients.module.css';

const BurgerIngredients = () => {

    const { ingredients } = React.useContext(IngredientsContext);
    const { order } = React.useContext(OrderContext);

    const [ tab, setTab ] = React.useState("bun");
    const tabs = {
        "bun": "Булки",
        "sauce": "Соусы",
        "main": "Начинки",
    };

    const tabRefs = {
        "bun": useRef(null),
        "sauce": useRef(null),
        "main": useRef(null),
    };

    const handleTabClick = (type) => {
        setTab(type);
        var tagRef = tabRefs[type].current ?? null;
        return tagRef && tagRef.scrollIntoView();
    };

    return (

        <section>
            
            <h1 className="mt-10 mb-5 text text_type_main-large">Соберите бургер</h1>
            
            <nav className={`${styles.tabs} mt-5 mb-10`}>
                {
                    Object.keys(tabs).map((type) => (
                        <Tab key={type} active={type === tab} onClick={() => handleTabClick(type)}>
                            {tabs[type]}
                        </Tab>
                    ))
                }
            </nav>

            <div className="scroller">
                {
                    Object.keys(tabs).map((type) => (
                        <Fragment key={type}>
                            <h2 className="mt-10 text text_type_main-medium" ref={tabRefs[type]}>
                                {tabs[type]}
                            </h2>
                            <ul className={styles.list}>
                                {
                                    ( ingredients ) ?
                                    ( ingredients.filter(ingredient => ingredient.type === type).map((ingredient) => {
                                        const item = order.items.find((item) => item._id === ingredient._id);
                                        const count = (item) ? ((item.type === "bun") ? 2 : 1) : 0;
                                        return (
                                            <li key={ingredient._id} className={`${styles.card} mt-6 mb-2 ml-4 mr-2`}>
                                                <BurgerIngredientCard item={ingredient} count={count} />
                                            </li>
                                        )
                                    })) : null
                                }
                            </ul>
                        </Fragment>
                    ))
                }
            </div>

        </section>
    )
}

export default BurgerIngredients;