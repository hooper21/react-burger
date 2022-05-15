import { FC, useEffect } from 'react';
import { wsConnectionPublicInit, wsConnectionPrivateInit } from '../../services/actions/websocket';
import { useAppSelector, useAppDispatch } from "../../services/types/hooks";
import { useParams, useRouteMatch } from "react-router-dom";

import { TOrderInfo } from "../../utils/types"

import OrderDetails from '../../components/Orders/OrderDetails/OrderDetails';
import { NotFound } from  '..';

type TParams = {
    [id: string]: string;
};

const OrderPage: FC = () => {

    const isPrivatePage = !!useRouteMatch("/profile");

    const { orders, selected } = useAppSelector((store: any) => isPrivatePage ? store.orders : store.statistic );

    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!orders.connected) {
            if (isPrivatePage)
                dispatch(wsConnectionPrivateInit());
            else
                dispatch(wsConnectionPublicInit());
        }
    }, [ dispatch, orders.connected, isPrivatePage ]);

    const { id } = useParams<TParams>();
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