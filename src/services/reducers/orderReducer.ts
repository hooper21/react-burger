import { ACTION_TYPES } from "../action-types";
import { TOrder } from '../../utils/types'


type TOrderState = {
    order: TOrder | null,
    loading: boolean,
    error: string | null,
};

const initialState: TOrderState = {
    order: null,
    loading: false,
    error: null,
};

export const orderReducer = (state = initialState, action: any) => {

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
