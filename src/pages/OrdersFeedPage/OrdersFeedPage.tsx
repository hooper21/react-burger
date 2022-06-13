import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/types/hooks';
import { wsConnectionPublicInit, wsConnectionClose } from '../../services/actions/websocket';

import OrdersList from '../../components/Orders/OrdersList/OrdersList';
import OrdersDashboard from '../../components/Orders/OrdersDashboard/OrdersDashboard';
import styles from './OrdersFeedPage.module.css';

const OrdersFeedPage: FC = () => {

    const { orders, connected, loading, error } = useAppSelector((store) => store.statistic );
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!connected) {
            dispatch(wsConnectionPublicInit());
        };
    }, [ dispatch, connected, loading ]);

    useEffect(() => {
        return () => {
            dispatch(wsConnectionClose());
        };
    }, []);

    if ( !connected || loading ) {
        return null;
    };

    return (
        <main className={styles.main}>
            <OrdersList title="Лента заказов" items={orders} />
            <OrdersDashboard />
        </main>
    );
};

export default OrdersFeedPage;