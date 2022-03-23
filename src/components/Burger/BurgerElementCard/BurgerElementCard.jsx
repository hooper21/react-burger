import { useRef } from "react";
import { useDispatch } from "react-redux";
import { changeBurgerIngredients } from "../../../services/actions/order";
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag, useDrop } from 'react-dnd';

import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../../utils/types';

import styles from './BurgerElementCard.module.css';

const BurgerElementCard = ({ item, index, state, onRemove }) => {

    const dispatch = useDispatch();
    const ref = useRef(null);
    const [{ isDragging }, dragRef] = useDrag({
        type: "burder-item",
        item: () => ({ item, index }),
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    const [{ isOver }, dropRef] = useDrop({
        accept: "burder-item",
        collect: (monitor) => ({
            isOver: monitor.isOver()
        }),
        drop: (item) => {
            if (item.index === index) return;
            dispatch(changeBurgerIngredients({selected: item.index, target: index }));
        },
    })

    if (item.type !== "bun") {
        dragRef(dropRef(ref));
    };

    const opacity = (isDragging || isOver) ? 0.5 : 1;

    return (
        <article ref={ref} className={`${styles.card} mb-4`} style={{...styles, opacity}} draggable>
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
                handleClose={onRemove}
            />
        </article>
    )
};

BurgerElementCard.propTypes = {
    item: ingredientPropTypes.isRequired,
    index: PropTypes.string,
    state: PropTypes.string,
    onRemove: PropTypes.func,
};

export default BurgerElementCard;