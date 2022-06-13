import { FC, useEffect } from 'react';
import { useRouteMatch } from "react-router-dom";
import { wsConnectionPublicInit, wsConnectionClose } from '../../services/actions/websocket';
import { useAppSelector, useAppDispatch } from "../../services/types/hooks";
import { useParams } from "react-router-dom";

import { TOrderInfo } from "../../utils/types";

import OrderDetails from '../../components/Orders/OrderDetails/OrderDetails';
import { NotFound } from  '..';

type TParams = {
    [id: string]: string;
};

const OrderPage: FC = () => {

    const { id } = useParams<TParams>();

    const isPrivate = !!useRouteMatch("/profile");
    const { orders, connected, loading, error, selected } = useAppSelector((store) => isPrivate ? store.orders : store.statistic );

    const dispatch = useAppDispatch();
    useEffect(() => {
        if ( !connected && !loading && !error) {
            dispatch(wsConnectionPublicInit());
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

    const order = selected ?? ( (orders) ? orders.find((item: TOrderInfo) => item._id === id) : null );

    return (
        (order) ? (
            <div>
                <OrderDetails item={order} />
            </div>
        ) : (
            <NotFound />
        )
    );
};

export default OrderPage;