import { FC, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from "../../../services/types/hooks";
import { TWebSocketState, wsConnectionPrivateInit } from '../../../services/actions/websocket';

import ProfileNavigation from "../../../ui/ProfileNavigation/ProfileNavigation";
import OrdersList from '../../../components/Orders/OrdersList/OrdersList';
import styles from './ProfileOrders.module.css';

const ProfileOrders: FC = () => {

    const orders: TWebSocketState = useAppSelector((store: any) => store.orders);

    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!orders.connected) {
            dispatch(wsConnectionPrivateInit());
        };
    }, [ dispatch, orders.connected ]);

    if (!orders.orders) 
        return null;

    return (
        <div className={styles.container + " pr-5 pl-5"}>
            <ProfileNavigation />
            <OrdersList />
        </div>
    );
};

export default ProfileOrders;