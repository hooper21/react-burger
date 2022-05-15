import { ACTION_TYPES } from "../action-types";
import { TOrder } from "../../utils/types";

export interface IGetOrderRequest {
    readonly type: typeof ACTION_TYPES.GET_ORDER_REQUEST;
};
export const getOrderRequest = (): IGetOrderRequest => ({
    type: ACTION_TYPES.GET_ORDER_REQUEST,
});

export interface IGetOrderSuccess {
    readonly type: typeof ACTION_TYPES.GET_ORDER_SUCCESS;
    readonly order: TOrder | null | undefined;
};
export const getOrderSuccess = (order: TOrder | null | undefined): IGetOrderSuccess => ({
    type: ACTION_TYPES.GET_ORDER_SUCCESS,
    order: order,
});

export interface IGetOrderFailed {
    readonly type: typeof ACTION_TYPES.GET_ORDER_FAILED;
    readonly error: string;
};
export const getOrderFailed = (error: string): IGetOrderFailed => ({
    type: ACTION_TYPES.GET_ORDER_FAILED,
    error: error
});

export interface IHideOrderErrors {
    readonly type: typeof ACTION_TYPES.CLEAR_ERRORS;
};
export const hideOrderErrors = (): IHideOrderErrors => ({
    type: ACTION_TYPES.CLEAR_ERRORS,
});


export type TOrderActions =
    | IGetOrderRequest
    | IGetOrderSuccess
    | IGetOrderFailed
    | IHideOrderErrors;