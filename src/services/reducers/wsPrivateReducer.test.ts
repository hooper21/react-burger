import { wsPrivateReducer } from "./wsPrivateReducer";
import { ACTION_TYPES } from "../action-types";
import { initialState  } from '../actions/websocket'
import { TOrdersInfo } from "../../utils/types";
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

    it("Should set state WS_CONNECTION_PRIVATE_INIT", () => {
        expect(wsPrivateReducer(initialState, {
            type: ACTION_TYPES.WS_CONNECTION_PRIVATE_INIT,
        }))
        .toEqual({
            ...initialState,
        });
    });

    it("Should set state WS_CONNECTION_SUCCESS", () => {
        expect(wsPrivateReducer(initialState, {
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
        expect(wsPrivateReducer(initialState, {
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

    it("Should set state WS_GET_USER_ORDERS", () => {
        expect(wsPrivateReducer(initialState, {
            type: ACTION_TYPES.WS_GET_USER_ORDERS,
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

});