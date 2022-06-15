import { orderReducer } from './orderReducer';
import { ACTION_TYPES } from "../action-types";
import { TIngredients, TOrder } from "../../utils/types";
import { TOrderActions, TOrderState, initialState } from "../actions/order";

const testOrder: TOrder = {
    number: 777,
    name: "Test order",
};

const testError = "Some account error";

describe("Order reducer", () => {

    it("Should set state GET_ORDER_REQUEST", () => {
        expect(orderReducer(initialState, {
            type: ACTION_TYPES.GET_ORDER_REQUEST,
        }))
        .toEqual({
            ...initialState,
            order: null,
            loading: true,
            error: null,
        });
    });

    it("Should set state GET_ORDER_SUCCESS", () => {
        expect(orderReducer(initialState, {
            type: ACTION_TYPES.GET_ORDER_SUCCESS,
            order: testOrder
        }))
        .toEqual({
            ...initialState,
            order: testOrder,
            loading: false,
        });
    });

    it("Should set state GET_ORDER_FAILED", () => {
        expect(orderReducer(initialState, {
            type: ACTION_TYPES.GET_ORDER_FAILED,
            error: testError
        }))
        .toEqual({
            ...initialState,
            order: null,
            loading: false,
            error: testError,
        });
    });

    it("Should set state CLEAR_ERRORS", () => {
        const testState = { ...initialState, error: testError };
        expect(orderReducer(initialState, {
            type: ACTION_TYPES.CLEAR_ERRORS,
        }))
        .toEqual({
            ...testState,
            error: null,
        });
    });

});