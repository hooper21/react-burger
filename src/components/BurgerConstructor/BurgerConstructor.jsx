import React, { useState } from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerElementCard from "../BurgerElementCard/BurgerElementCard";

import PropTypes from 'prop-types';
import {ingredientPropTypes} from '../../utils/types';

import styles from './BurgerConstructor.module.css';

const BurgerConstructor = ({ defaultItems }) => {

    const [ items, useItems ] = useState(defaultItems);

    return (
        <section className={`${styles.container} mt-25`} id="burger-constructor">
            <ul className={styles.list}>
                {
                    items.filter((item) => item.state === "top").map((item) => (
                        <BurgerElementCard key={item._id} item={item} />
                    ))
                }
            </ul>
            <ul className={`${styles.list} scroller mr-6`}>
                {
                    items.filter((item) => !item.state).map((item, index) => (
                        <BurgerElementCard key={index} item={item} />
                    ))
                }
            </ul>
            <ul className={styles.listBottom}>
                {
                    items.filter((item) => item.state === "bottom").map((item) => (
                        <BurgerElementCard key={item._id} item={item} />
                    ))
                }
            </ul>

                
            <div className={`${styles.order} mt-10 mr-6`}>
                <p className="text text_type_digits-medium">610</p>
                <div className={`ml-2 mr-10 ${styles.currency_icon}`}>
                    <CurrencyIcon type="primary"/>
                </div>
                
                <Button type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>

        </section>
    )
};

BurgerConstructor.propTypes = {
    defaultItems: PropTypes.arrayOf(ingredientPropTypes.isRequired),
};


export default BurgerConstructor;