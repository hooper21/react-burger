import { ACTION_TYPES } from "../action-types";
import { TOrderActions, TOrderState, initialState } from "../actions/order";

export const orderReducer = (state = initialState, action: TOrderActions): TOrderState => {

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
