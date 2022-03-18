import React from "react";
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import PropTypes from 'prop-types';
import {ingredientPropTypes} from '../../utils/types';

import styles from './BurgerElementCard.module.css';

const BurgerElementCard = ({ item, state }) => {
    return (
        <article className={`${styles.card} mb-4`}>
            <div className={`${styles.grip} mr-6`}>
                {
                    (!state) ?  (
                        <DragIcon type="primary" />
                    ) : null
                }
            </div>
            <ConstructorElement 
                type={state}
                isLocked={state ? true : false}
                text={item.name}
                price={item.price}
                thumbnail={item.image}
                className={styles.element}
            />
        </article>
    )
};

BurgerElementCard.defaultProps = {
    item: ingredientPropTypes.isRequired,
    count: PropTypes.number,
};

BurgerElementCard.defaultProps = {
    count: 0
};

export default BurgerElementCard;