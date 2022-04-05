import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useDrag } from 'react-dnd';
import { setCurrentIngredient } from "../../../services/actions/ingredients";
import { setLocation } from "../../../services/DataService";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import PropTypes from 'prop-types';
import {ingredientPropTypes} from '../../../utils/types';

import styles from './BurgerIngredientCard.module.css';

const BurgerIngredientCard = ({ item, count }) => {

    const dispatch = useDispatch();

    const [, dragRef] = useDrag({
        type: "ingredient",
        item: item,
    });

    const onClick = () => {
        dispatch(setCurrentIngredient(item));
        setLocation(`/ingredients/${item._id}`);
    };

    const opacity = (count > 0) ? 0.5 : 1;

    return (
        <Fragment>
            <article ref={dragRef} onClick={onClick} className={`${styles.card}`} style={{...styles, opacity}}>
                    <img className={`${styles.image} mb-1`} src={item.image} alt={item.name} />
                <div className={`${styles.price} mb-1`} >
                    <p className="text text_type_digits-default mr-2">{item.price}</p>
                    <CurrencyIcon type="primary" />                
                </div>
                <div className={`${styles.title} text text_type_main-default mt-1`}>{item.name}</div>
                {
                    (count > 0) && (
                        <Counter count={count} size="default" className="mr-2" />
                    )
                }
            </article>
        </Fragment>
    );

};

BurgerIngredientCard.propTypes = {
    item: ingredientPropTypes.isRequired,
    count: PropTypes.number,
};

BurgerIngredientCard.defaultProps = {
    count: 0
};

export default BurgerIngredientCard;