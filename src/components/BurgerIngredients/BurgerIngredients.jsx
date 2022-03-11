import React, { Fragment } from 'react';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientCard from "../BurgerIngredientCard/BurgerIngredientCard";

import PropTypes from 'prop-types';
import {ingredientPropTypes} from '../../utils/types';

import styles from './BurgerIngredients.module.css';

const BurgerIngredients = ({ items }) => {

    const tabs = {
        "bun": "Булки",
        "sauce": "Соусы",
        "main": "Начинки",
    };

    const [ tab, setTab ] = React.useState("bun");

    return (

        <section>
            
            <h1 className="mt-10 mb-5 text text_type_main-large">Соберите бургер</h1>
            
            <nav className={`${styles.tabs} mt-5 mb-10`}>
                {
                    Object.keys(tabs).map((type) => (
                        <Tab key={type} active={type === tab} onClick={() => setTab(type)}>
                            {tabs[type]}
                        </Tab>
                    ))
                }
            </nav>

            <div className="scroller">
                {
                    Object.keys(tabs).map((type) => (
                        <Fragment key={type}>
                            <h2 className="mt-10 text text_type_main-medium">
                                {tabs[type]}
                            </h2>
                            <ul className={styles.list}>
                                {
                                    items.filter(item => item.type === type).map((item) => (
                                        <li key={item._id} className={`${styles.card} mt-6 mb-2 ml-4 mr-2`}>
                                            <BurgerIngredientCard item={item} count={(item._id === "60666c42cc7b410027a1a9b1") ? 1 : 0} />
                                        </li>
                                    ))
                                }
                            </ul>
                        </Fragment>
                    ))
                }
            </div>

        </section>
    )
}

BurgerIngredients.propTypes = {
    items: PropTypes.arrayOf(ingredientPropTypes).isRequired,
}

export default BurgerIngredients;