import { combineReducers, EmptyObject } from "redux";
import { ingredientsReducer } from "./ingredientsReducer";
import { burgerReducer } from "./burgerReducer";
import { orderReducer } from "./orderReducer";
import { accountReducer } from "./accountReducer";
import { wsPrivateReducer } from "./wsPrivateReducer";
import { wsPublicReducer } from "./wsPublicReducer";

import { TIngredientsState } from "../actions/ingredients";
import { TBurgerState } from "../actions/burger";
import { TOrderState } from "../actions/order";
import { TAccountState } from "../actions/account";
import { TWebSocketState } from "../actions/websocket";

export type TRootStore = EmptyObject & {
    ingredients: TIngredientsState;
    burger: TBurgerState;
    order: TOrderState;
    account: TAccountState;
    statistic: TWebSocketState;
    orders: TWebSocketState;
};

const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    burger: burgerReducer,
    order: orderReducer,
    account: accountReducer,
    statistic: wsPublicReducer,
    orders: wsPrivateReducer,
});

export default rootReducer;
