import { FC, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../services/types/hooks";
import { TOrderInfo } from '../../../utils/types';
import { TRootStore } from "../../../services/reducers/rootReducer";
import { TWebSocketState } from '../../../services/actions/websocket';

import styles from './OrdersDashboard.module.css';

const MAX_ORDERS = 5;

const OrdersDashboard: FC = () => {
    
    const statistic: TWebSocketState = useAppSelector((store: TRootStore) => store.statistic);
    if (!statistic) 
        return null;

    const { orders, total, totalToday } = statistic;
    const ordersDone = orders.filter((order) => order.status === 'done');
    const ordersDoing = orders.filter((order) => order.status === 'created' || order.status === 'pending');
    
    return (
        <section className={`${styles.container} mt-30`}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <div className={styles.status}>
                        <div className={styles.item}>
                            <p className="text text_type_main-medium mb-5">Готовы:</p>
                            <div className={styles.itemDone}>
                            {
                                ordersDone?.slice(0, MAX_ORDERS).map((order: TOrderInfo) => (
                                    <p className={`${styles.done} text text_type_digits-default`} key={order._id}>{order.number}</p>
                                ))
                            }
                            </div>
                        </div>
                        <div className={styles.item}>
                            <p className="text text_type_main-medium mb-5">В работе:</p>
                            <div>
                            {
                                ordersDoing?.slice(0, MAX_ORDERS).map((order: TOrderInfo) => (
                                    <p className={`${styles.doing} text text_type_digits-default`} key={order._id}>{order.number}</p>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                    <div className="mt-15">
                        <p className="text text_type_main-medium">
                            Выполнено за все время:
                        </p>
                        <p className={`${styles.glow} text text_type_digits-large`}>
                            {total}
                        </p>
                        </div>
                        <div className="mt-15">
                        <p className="text text_type_main-medium">
                            Выполнено за сегодня:
                        </p>
                        <p className={`${styles.glow} text text_type_digits-large`}>
                            {totalToday}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default OrdersDashboard;