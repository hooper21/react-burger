import { combineReducers } from "redux";
import ingredientsReducer from "./ingredientsReducer";
import currentIngredientReducer from "./currentIngredientReducer";
import burgerReducer from "./burgerReducer";
import orderReducer from "./orderReducer";

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
    }

};

const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    currentIngredient: currentIngredientReducer,
    burger: burgerReducer,
    order: orderReducer,
});

export default rootReducer;
