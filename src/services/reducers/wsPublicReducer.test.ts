import { wsPublicReducer } from "./wsPublicReducer";
import { ACTION_TYPES } from "../action-types";
import { TWebSocketActions, TWebSocketState, initialState  } from '../actions/websocket'
import { TOrderInfo, TOrdersInfo } from "../../utils/types";
import { orders } from "../../utils/mock/orders";

const testError = new Event("TestErrorType");

const testOrdersResponce: TOrdersInfo = {
    total: 1000,
    totalToday: 500,
    orders: orders,
    success: true,
    selected: undefined
};

describe("Order reducer", () => {

    it("Should set state WS_CONNECTION_SUCCESS", () => {
        expect(wsPublicReducer(initialState, {
            type: ACTION_TYPES.WS_CONNECTION_SUCCESS,
        }))
        .toEqual({
            ...initialState,
            connected: true,
            loading: false,
            error: undefined,
        });
    });

    it("Should set state WS_CONNECTION_FAILED", () => {
        expect(wsPublicReducer(initialState, {
            type: ACTION_TYPES.WS_CONNECTION_FAILED,
            error: testError,
        }))
        .toEqual({
            ...initialState,
            connected: false,
            loading: false,
            error: testError,
        });
    });

    it("Should set state WS_GET_ALL_ORDERS", () => {
        expect(wsPublicReducer(initialState, {
            type: ACTION_TYPES.WS_GET_ALL_ORDERS,
            orders: testOrdersResponce,
        }))
        .toEqual({
            ...initialState,
            orders: testOrdersResponce.orders,
            total: testOrdersResponce.total,
            totalToday: testOrdersResponce.totalToday,
            loading: false,
            error: undefined,
        });
    });

    it("Should set state WS_SET_CURRENT_ORDER", () => {
        const testOrder: TOrderInfo = orders[0];
        expect(wsPublicReducer(initialState, {
            type: ACTION_TYPES.WS_SET_CURRENT_ORDER,
            item: testOrder,
        }))
        .toEqual({
            ...initialState,
            selected: testOrder,
        });
    });

});