import { FC } from "react";
import { useRouteMatch } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../services/types/hooks";
import { wsSetCurrentOrder } from "../../../services/actions/websocket";
import { TOrderInfo } from '../../../utils/types';
import { setLocation } from "../../../services/DataService";
import OrderCard from '../OrderCard/OrderCard';
import OrderDetails from '../OrderDetails/OrderDetails';
import Modal from '../../../ui/Modal/Modal';

import styles from "./OrdersList.module.css";

const MAX_ORDERS = 10;

type TPageProps = {
    title?: string,
    items: ReadonlyArray<TOrderInfo>,
};

const OrdersList: FC<TPageProps> = ({ title, items }: TPageProps) => {

    const dispatch = useAppDispatch();

    const isPrivate = !!useRouteMatch("/profile");

    const { selected } = useAppSelector((store) => store.statistic );

    if (!items)
        return null;

    const onSelect = (item: TOrderInfo) => {
        dispatch(wsSetCurrentOrder(item));
        if (isPrivate) {
            setLocation(`/profile/orders/${item._id}`);
        } else {
            setLocation(`/feed/${item._id}`);
        }
    };
    
    const onClose = () => {
        dispatch( wsSetCurrentOrder(null) );
        if (isPrivate) {
            setLocation( "/profile/orders" );
        } else {
            setLocation( "/feed" );
        }
    };

    return (
        <section>
            {
                (title) && (
                    <h1 className="mt-10 mb-5 text text_type_main-large">{title}</h1>
                )
            }
            <ul className={styles.list}>
                {
                    
                    (items.length) ? (
                        items.slice(0, MAX_ORDERS).map((item: TOrderInfo) =>
                        <li className={styles.card} key={item._id}>
                            <OrderCard item={ item } onClick={onSelect} key={item._id}/>
                        </li>
                    )
                    ) : (
                        <p className={styles.emptyItems}>
                            ???????????? ?????????????? ????????
                        </p>
                    )
                    
                }
            </ul>
    
            {
                ( selected ) ? (
                    <Modal onClose={onClose} title="???????????? ????????????">
                        <OrderDetails item={selected} />
                    </Modal>
                ) : null
            }

        </section>
      );

}

export default OrdersList;