import React from "react";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import PropTypes from 'prop-types';
import {ingredientPropTypes} from '../../utils/types';

import styles from './BurgerIngredientCard.module.css';

const BurgerIngredientCard = ({ item, count }) => {
    return (
        <article className={`${styles.card}`}>
            <img className={`${styles.image} mb-1`} src={item.image} alt={item.title} />
            <div className={`${styles.price} mb-1`} >
                <p className="text text_type_digits-default mr-2">{item.price}</p>
                <CurrencyIcon type="primary" />                
            </div>
            <div className={`${styles.title} text text_type_main-default mt-1`}>{item.title}</div>
            {
                (count > 0) ? 
                    <Counter count={count} size="default" className="mr-2" />
                : null
            }
        </article>
    )
};

BurgerIngredientCard.propTypes = {
    item: ingredientPropTypes.isRequired,
    count: PropTypes.number,
};

BurgerIngredientCard.defaultProps = {
    count: 0
};

export default BurgerIngredientCard;