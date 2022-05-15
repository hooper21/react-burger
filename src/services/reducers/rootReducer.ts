import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredientsReducer";
import { currentIngredientReducer } from "./currentIngredientReducer";
import { burgerReducer } from "./burgerReducer";
import { orderReducer } from "./orderReducer";
import { accountReducer } from "./accountReducer";
import { wsPrivateReducer } from "./wsPrivateReducer";
import { wsPublicReducer } from "./wsPublicReducer";

const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    currentIngredient: currentIngredientReducer,
    burger: burgerReducer,
    order: orderReducer,
    account: accountReducer,
    statistic: wsPublicReducer,
    orders: wsPrivateReducer,
});

export default rootReducer;
