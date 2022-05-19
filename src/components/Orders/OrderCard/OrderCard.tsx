import React, { FC, useMemo } from "react";
import { useAppSelector } from '../../../services/types/hooks';
import { TIngredient, TOrderInfo, getOrderStatusName, getDateToTitle } from '../../../utils/types';
import { TRootStore } from "../../../services/reducers/rootReducer";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./OrderCard.module.css";

type TOrderProps = {
    item: TOrderInfo;
    onClick: (item: TOrderInfo) => void;
};

const OrderItem: FC<TOrderProps> = ({ item, onClick }: TOrderProps) => {

    const ingredients = useAppSelector((store: TRootStore) => store.ingredients);

    const ordersImages = useMemo(() => {
        if (ingredients) {
            return item.ingredients.map((orderId: string) => {
                return ingredients.items.find((ingredient: TIngredient) => {
                return ingredient._id === orderId;
                });
            });
        };
        return [];
    }, [item.ingredients, ingredients]);

    const visibleOrdersImages = useMemo(() => {
        return ordersImages.slice(0, 6);
    }, [ordersImages]);

    const countHiddenOrdersImages = useMemo(() => {
        return item.ingredients.length - visibleOrdersImages.length;
    }, [item.ingredients, visibleOrdersImages]);

    const bunsCount = useMemo(() => {
        return ordersImages.filter((item) => item?.type === "bun").length;
    }, [ordersImages]);

    const orderPrice = useMemo(() => {
    return ordersImages.reduce((acc, item) => {
        if (item?.type !== "bun") return (acc += item?.price || 0);
        return (acc += bunsCount === 1 ? item?.price * 2 : item?.price);
    }, 0);
    }, [ordersImages, bunsCount]);

    if (!ingredients)
        return null;

    return (
        <article onClick={() => onClick(item)} className={`${styles.card}`}>
            <div className={styles.top}>
                <span className="text text_type_digits-default"># {item.number}</span>
                <span className="text text_type_main-default text_color_inactive">
                    { getDateToTitle(item.updatedAt) }
                </span>
            </div>
            <span className={`${styles.name} text text_type_main-medium mt-6`}>
                {item.name}
            </span>
            <span className={`text text_type_main-default mt-2 mb-6 ${`${item?.status === "done"} && ${styles["status-done"]}`}`}>
                { getOrderStatusName(item.status) }
            </span>
            <div className={styles.bottom}>
                <div className={styles["image-boxes"]}>
                {visibleOrdersImages.map(
                    (item, index: React.Key | null | undefined) => (
                    <div key={index} className={styles["image-box"]} style={{ backgroundImage: `url("${item?.image_mobile}")` }}>
                        {index === visibleOrdersImages.length - 1 && countHiddenOrdersImages ? (
                        <p className={`${styles["hidden-count"]} text text_type_main-default`}>
                            +{countHiddenOrdersImages}
                        </p>
                        ) : null}
                    </div>
                    )
                )}
                </div>
                <div className={styles.price}>
                    <span className="text text_type_digits-default">{ orderPrice }</span>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </article>
    );

}

export default OrderItem;