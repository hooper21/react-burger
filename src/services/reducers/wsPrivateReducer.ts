import { ACTION_TYPES } from "../action-types";
import { TWebSocketActions, TWebSocketState, initialState  } from '../actions/websocket'
//import { TOrderInfo } from "../../utils/types";

export const wsPrivateReducer = (state = initialState, action: TWebSocketActions): TWebSocketState => {
    
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
