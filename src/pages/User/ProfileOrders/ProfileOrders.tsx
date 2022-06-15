import { FC, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from "../../../services/types/hooks";
import {  wsConnectionPrivateInit, wsConnectionClose } from '../../../services/actions/websocket';

import ProfileNavigation from "../../../ui/ProfileNavigation/ProfileNavigation";
import OrdersList from '../../../components/Orders/OrdersList/OrdersList';
import styles from './ProfileOrders.module.css';

const ProfileOrders: FC = () => {

    const { orders, connected, loading, error } = useAppSelector((store) => store.orders );
    const dispatch = useAppDispatch();
    useEffect(() => {
        if ( !connected && !loading && !error ) {
            dispatch(wsConnectionPrivateInit());
        };
    }, [ dispatch, connected, loading, error ]);

    useEffect(() => {
        return () => {
            dispatch(wsConnectionClose());
        };
    }, []);

    if ( !connected || loading ) {
        return null;
    };

    return (
        <div className={styles.container + " pr-5 pl-5"}>
            <ProfileNavigation />
            <OrdersList items={orders} />
        </div>
    );
};

export default ProfileOrders;