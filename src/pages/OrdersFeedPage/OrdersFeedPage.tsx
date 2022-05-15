import { FC, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from "../../services/types/hooks";
import { TWebSocketState } from '../../services/reducers/wsPrivateReducer';
import { wsConnectionPublicInit } from '../../services/actions/websocket';

import OrdersList from '../../components/Orders/OrdersList/OrdersList';
import OrdersDashboard from '../../components/Orders/OrdersDashboard/OrdersDashboard';
import styles from './OrdersFeedPage.module.css';

const OrdersFeedPage: FC = () => {
    
    const statistic: TWebSocketState = useAppSelector((store: any) => store.statistic);

    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!statistic.connected) {
            dispatch(wsConnectionPublicInit());
        }
    }, [ dispatch, statistic.connected ]);

    if (!statistic.orders) 
        return null;
    
    // console.log("OrdersFeedPage", statistic);

    return (
        <main className={styles.main}>
            <OrdersList title="Лента заказов" />
            <OrdersDashboard />
        </main>
    );
};

export default OrdersFeedPage;