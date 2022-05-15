import { ACTION_TYPES } from "../action-types";
import { TOrderInfo } from '../../utils/types'
import { TWebSocketActions } from '../actions/websocket'

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

export const wsPrivateReducer = (state = initialState, action: TWebSocketActions) => {
    
    switch (action.type) {
      
        case ACTION_TYPES.WS_CONNECTION_PRIVATE_INIT:
            return initialState;
  
        case ACTION_TYPES.WS_CONNECTION_SUCCESS:
            return { 
                ...state,
                connected: true,
                loading: false,
                error: undefined,
            };
  
        case ACTION_TYPES.WS_CONNECTION_FAILED:
            return { 
                ...state,
                connected: false,
                loading: false,
                error: action.error,
            };
  
        case ACTION_TYPES.WS_GET_USER_ORDERS: {
            const { success, orders, total, totalToday } = action.orders;
            return {
                ...state,
                orders: success ? orders : [],
                total,
                totalToday,
                loading: false,
                error: undefined,
            };
        };
  
        default:
          return state;

    };

};
