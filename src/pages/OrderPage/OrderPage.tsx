import { FC, useEffect } from 'react';
import { wsConnectionPublicInit } from '../../services/actions/websocket';
import { useAppSelector, useAppDispatch } from "../../services/types/hooks";
import { useParams } from "react-router-dom";

import { TOrderInfo } from "../../utils/types";

import OrderDetails from '../../components/Orders/OrderDetails/OrderDetails';
import { NotFound } from  '..';

type TParams = {
    [id: string]: string;
};

const OrderPage: FC = () => {

    const { orders, connected, loading } = useAppSelector((store) => store.statistic );
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!connected) {
            dispatch(wsConnectionPublicInit());
        };
    }, [ dispatch, connected ]);

    const { id } = useParams<TParams>();

    if (!connected || loading) {
        return null;
    };
    
    const order = (orders) ? orders.find((item: TOrderInfo) => item._id === id) : null;

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