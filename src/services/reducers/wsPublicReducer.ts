import { ACTION_TYPES } from "../action-types";
import { initialState } from './wsPrivateReducer';
import { TWebSocketActions } from '../actions/websocket'

export const wsPublicReducer = (state = initialState, action: TWebSocketActions) => {
    
    switch (action.type) {
      
        case ACTION_TYPES.WS_CONNECTION_PUBLIC_INIT:
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
                orders: [],
                selected: undefined,
                error: action.error,
            };
  
        case ACTION_TYPES.WS_GET_ALL_ORDERS: {
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
  
        case ACTION_TYPES.WS_SET_CURRENT_ORDER:
            const item = action.item;
            return { 
                ...state,
                selected: item,
        };
  
        default:
          return state;

    };

};
