import { initialState } from "./rootReducer";
import { ACTION_TYPES } from "../actions/types";

const orderReducer = (state = initialState.order, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_ORDER_REQUEST:
            return {
                ...state,
                order: null,
                loading: true,
                error: null,
            };
        case ACTION_TYPES.GET_ORDER_SUCCESS:
            return {
                ...state,
                order: action.order,
                loading: false,
            };
        case ACTION_TYPES.GET_ORDER_FAILED:
            return {
                ...state,
                order: null,
                loading: false,
                error: action.error,
            };
        case ACTION_TYPES.CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    };
};

export default orderReducer;
