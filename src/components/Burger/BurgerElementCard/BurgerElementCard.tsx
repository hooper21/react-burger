import { useRef, FC } from "react";
import { useAppDispatch } from '../../../services/types/hooks';
import { changeBurgerIngredients } from "../../../services/actions/burger";
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag, useDrop } from 'react-dnd';

import { TBurgerElement } from "../../../utils/types";
import { TIngredient } from "../../../utils/types";

import styles from './BurgerElementCard.module.css';

type TBurgerElementCard = {
    item: TIngredient;
    index?: string;
    state?: "top" | "bottom" | undefined;
    onRemove?: () => void;
};

const BurgerElementCard: FC<TBurgerElementCard> = ({ item, index, state, onRemove }: TBurgerElementCard) => {

    const dispatch = useAppDispatch();
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
        drop: (item: TBurgerElement) => {
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
                handleClose={onRemove}
            />
        </article>
    )
};

export default BurgerElementCard;