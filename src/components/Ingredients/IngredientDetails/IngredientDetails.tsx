import React from "react";

import styles from "./IngredientDetails.module.css";

import { TIngredient } from "../../../utils/types";

type TIngredientsDetails ={
    item: TIngredient;
};

function IngredientsDetails( { item }: TIngredientsDetails ) {
  return (
    <article className={styles.card + " pb-15 pr-10 pl-10"}>
        <img src={item.image} alt={item.name} className={styles.image + " mb-4"} />
        <p className="text text_type_main-medium mb-8">{item.name}</p>
        <ul className={styles.container}>
            <li className={styles.text + " text text_type_main-default text_color_inactive"}>
            Калории,ккал <span>{item.calories}</span>
            </li>
            <li className={styles.text + " text text_type_main-default text_color_inactive"}>
            Белки, г <span>{item.proteins}</span>
            </li>
            <li className={styles.text + " text text_type_main-default text_color_inactive"}>
            Жиры, г <span>{item.fat}</span>
            </li>
            <li className={styles.text + " text text_type_main-default text_color_inactive"}>
            Углеводы, г <span>{item.carbohydrates}</span>
            </li>
        </ul>
    </article>
  );
}

export default IngredientsDetails;
