import { FC } from 'react';

import OrdersList from '../../components/Orders/OrdersList/OrdersList';
import OrdersDashboard from '../../components/Orders/OrdersDashboard/OrdersDashboard';
import styles from './OrdersFeedPage.module.css';

const OrdersFeedPage: FC = () => {
    return (
        <main className={styles.main}>
            <OrdersList title="Лента заказов" />
            <OrdersDashboard />
        </main>
    );
};

export default OrdersFeedPage;