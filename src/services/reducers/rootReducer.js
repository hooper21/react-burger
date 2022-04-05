import { combineReducers } from "redux";
import ingredientsReducer from "./ingredientsReducer";
import currentIngredientReducer from "./currentIngredientReducer";
import burgerReducer from "./burgerReducer";
import orderReducer from "./orderReducer";
import accountReducer from "./accountReducer";

export const initialState = {
    ingredients: {
        items: [],
        currentTab: "bun",
        loading: false,
        error: null,
    },

    currentIngredient: null,
    
    burger: {
        bun: null,
        items: [],
    },

    order: {
        order: null,
        loading: false,
        error: null,
    },

    account: {
        user: null,
        loading: false,
        error: null,
    }

};

const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    currentIngredient: currentIngredientReducer,
    burger: burgerReducer,
    order: orderReducer,
    account: accountReducer,
});

export default rootReducer;
