import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { socketMiddleware } from './WebSocketService';
import { OrdersStatisticActions, OrdersUserActions } from './actions/websocket';
import { WSS_USER_ORDERS, WSS_ALL_ORDERS } from '../config'

const composeEnhancers =
    typeof window as any === "object" && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(applyMiddleware(
    thunk, 
    socketMiddleware(WSS_ALL_ORDERS, false, OrdersStatisticActions),
    socketMiddleware(WSS_USER_ORDERS, true, OrdersUserActions),
));

export const store = createStore(rootReducer, enhancer);

