import { ACTION_TYPES } from "../action-types";
import { TOrdersInfo, TOrderInfo } from "../../utils/types";

export interface IWebSocketPublicInit {
    readonly type: typeof ACTION_TYPES.WS_CONNECTION_PUBLIC_INIT;
};
export const wsConnectionPublicInit = (): IWebSocketPublicInit => ({
    type: ACTION_TYPES.WS_CONNECTION_PUBLIC_INIT,
});

export interface IWebSocketPrivateInit {
    readonly type: typeof ACTION_TYPES.WS_CONNECTION_PRIVATE_INIT;
};
export const wsConnectionPrivateInit = (): IWebSocketPrivateInit => ({
    type: ACTION_TYPES.WS_CONNECTION_PRIVATE_INIT,
});

export interface IWebSocketSuccess {
    readonly type: typeof ACTION_TYPES.WS_CONNECTION_SUCCESS;
};
export const wsConnectionSuccess = (): IWebSocketSuccess => ({
    type: ACTION_TYPES.WS_CONNECTION_SUCCESS,
});

export interface IWebSocketFailed {
    readonly type: typeof ACTION_TYPES.WS_CONNECTION_FAILED;
    readonly error: Event;
};
export const wsConnectionFailed = (error: Event): IWebSocketFailed => ({
    type: ACTION_TYPES.WS_CONNECTION_FAILED,
    error
});

export interface IWebSocketClose {
    readonly type: typeof ACTION_TYPES.WS_CONNECTION_CLOSED;
};
export const wsConnectionClose = (): IWebSocketClose => ({
    type: ACTION_TYPES.WS_CONNECTION_CLOSED,
});

export interface IWebSocketGetAllOrders {
    readonly type: typeof ACTION_TYPES.WS_GET_ALL_ORDERS;
    readonly orders: TOrdersInfo;
};
export const wsGetAllOrders = (orders: TOrdersInfo): IWebSocketGetAllOrders => ({
    type: ACTION_TYPES.WS_GET_ALL_ORDERS,
    orders
});

export interface IWebSocketGetUserOrders {
    readonly type: typeof ACTION_TYPES.WS_GET_USER_ORDERS;
    readonly orders: TOrdersInfo;
};
export const wsGetUserOrders = (orders: TOrdersInfo): IWebSocketGetUserOrders => ({
    type: ACTION_TYPES.WS_GET_USER_ORDERS,
    orders
});

export interface IWebSocketSetCurrentOrder {
    readonly type: typeof ACTION_TYPES.WS_SET_CURRENT_ORDER;
    readonly item: TOrderInfo | null | undefined;
};
export const wsSetCurrentOrder = (item: TOrderInfo | null | undefined): IWebSocketSetCurrentOrder => ({
    type: ACTION_TYPES.WS_SET_CURRENT_ORDER,
    item
});

export type TWebSocketActions =
    | IWebSocketPublicInit
    | IWebSocketPrivateInit
    | IWebSocketSuccess
    | IWebSocketFailed
    | IWebSocketClose
    | IWebSocketGetAllOrders
    | IWebSocketGetUserOrders
    | IWebSocketSetCurrentOrder
    ;

export type TWebSocketOrdersActions = {
    onInit: typeof ACTION_TYPES.WS_CONNECTION_PUBLIC_INIT | typeof ACTION_TYPES.WS_CONNECTION_PRIVATE_INIT,
    onOpen: typeof ACTION_TYPES.WS_CONNECTION_SUCCESS,
    onClose: typeof ACTION_TYPES.WS_CONNECTION_CLOSED,
    onError: typeof ACTION_TYPES.WS_CONNECTION_FAILED,
    onMessage: typeof ACTION_TYPES.WS_GET_ALL_ORDERS | typeof ACTION_TYPES.WS_GET_USER_ORDERS,
};

export const OrdersStatisticActions: TWebSocketOrdersActions = {
    onInit: ACTION_TYPES.WS_CONNECTION_PUBLIC_INIT,
    onOpen: ACTION_TYPES.WS_CONNECTION_SUCCESS,
    onClose: ACTION_TYPES.WS_CONNECTION_CLOSED,
    onError: ACTION_TYPES.WS_CONNECTION_FAILED,
    onMessage: ACTION_TYPES.WS_GET_ALL_ORDERS,
};
export type TOrdersStatisticActions = typeof OrdersStatisticActions;

export const OrdersUserActions: TWebSocketOrdersActions = {
    onInit: ACTION_TYPES.WS_CONNECTION_PRIVATE_INIT,
    onOpen: ACTION_TYPES.WS_CONNECTION_SUCCESS,
    onClose: ACTION_TYPES.WS_CONNECTION_CLOSED,
    onError: ACTION_TYPES.WS_CONNECTION_FAILED,
    onMessage: ACTION_TYPES.WS_GET_USER_ORDERS,
};
export type TOrdersUserActions = typeof OrdersUserActions;



export type TWebSocketState = {
    connected: boolean,
    orders: ReadonlyArray<TOrderInfo>;
    selected: TOrderInfo | null | undefined,
    total: number;
    totalToday: number;
    error?: Event,
    loading: boolean,
    popup: boolean,
};

export const initialState: TWebSocketState = {
    connected: false,
    error: undefined,
    orders: [],
    selected: undefined,
    total: 0,
    totalToday: 0,
    loading: false,
    popup: false,
};