import { AnyAction, Middleware, MiddlewareAPI } from 'redux';
import { AppDispatch, RootState } from './types';
import { TOrdersInfo } from '../utils/types';
import { TWebSocketOrdersActions } from './actions/websocket';
import Storage from "./StorageService";

export const socketMiddleware = (url: string, isPrivate: boolean, actions: TWebSocketOrdersActions): Middleware => {
    
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        
        let socket: WebSocket | null = null;

        return next => (action: AnyAction) => {
            const token: string = isPrivate ? Storage.getLocalAccessToken()?.replace("Bearer", "").trim() : null;
            if (isPrivate && !token) {
                next(action);
                return;
            };

            const { dispatch } = store;
            const { type } = action;
            const { onInit, onOpen, onClose, onError, onMessage } = actions;

            if (type === onClose) {
                if (socket) {
                    socket.close();
                };
            };

            if (type === onInit) {
                const params = token ? `?token=${token}` : "";
                const wsUrl = `${url}${params}`;
                socket = new WebSocket(wsUrl);
                // console.log("WebSocket open", wsUrl);
            };
            
            if (socket) {

                socket.onopen = () => {
                  dispatch({ type: onOpen });
                };

                socket.onerror = (event: Event) => {
                  dispatch({ type: onError, error: event });
                };

                socket.onclose = () => {
                  dispatch({ type: onClose });
                };

                socket.onmessage = (event: MessageEvent) => {
                  const { data } = event;
                  const orders: TOrdersInfo = JSON.parse(data);
                  dispatch({ type: onMessage, orders: orders });
                };

            };

            next(action);

        };

    }) as Middleware;
};