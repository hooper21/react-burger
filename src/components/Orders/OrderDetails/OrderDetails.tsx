import React, { FC } from "react";
import { useAppSelector } from '../../../services/types/hooks';
import { TIngredient, TOrderInfo, getOrderStatusName, getDateToTitle } from '../../../utils/types';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./OrderDetails.module.css";

type TOrderProps = {
    item: TOrderInfo;
};

const OrderDetails: FC<TOrderProps> = ({ item }: TOrderProps) => {

    const ingredients = useAppSelector((store: any) => store.ingredients);

    if (!ingredients)
        return null;
        
    const orderIngredients = item.ingredients.map((id: string) => ingredients.items.find((item: TIngredient) => item._id === id));

    const totalPrice = orderIngredients.reduce((sum, ingredient) => { return sum + (ingredient?.price || 0); }, 0);

    return (
        <article className={styles.card + " pb-15 pr-10 pl-10"}>
            <span className={`text text_type_digits-default mb-10 ${styles.number}`}>
                #{ item.number }
            </span>
            <h1 className={`text text_type_main-medium mb-3 ${styles.left} ${styles.name} `}>
                {  item.name }
            </h1>
            <span className={`text text_type_main-default mb-15 ${styles.left} ${`${item.status === "done"} && ${styles.done}`}`}>
                { getOrderStatusName(item.status) }
            </span>
            <span className={`text text_type_main-medium mb-6 ${styles.left}`}>
                Состав:
            </span>
            <ul className={styles.ingredients}>
                { orderIngredients.map((ingredient, index) => (
                    (ingredient?.name) && (
                        <li key={index} className={styles.ingredient}>
                            <div className={styles.preview}>
                            <div className={styles.image} style={{ backgroundImage: `url("${ ingredient.image_mobile }")` }}/>
                            <span className="text text_type_main-default mr-4 ml-4">
                                { ingredient.name }
                            </span>
                            </div>
                            <div>
                            <span className={`text text_type_digits-default ${styles.price}`}>
                                { ingredient.price } <CurrencyIcon type="primary" />
                            </span>
                            </div>
                        </li>
                    )
                ))}
            </ul>
            <div className={`${styles.footer}`}>
                <span className="text text_type_main-default text_color_inactive">
                    { getDateToTitle(item.updatedAt) }
                </span>
                <div className={styles.totalPrice}>
                    <span className="text text_type_digits-default">{ totalPrice }</span>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </article>
    );

}

export default OrderDetails;