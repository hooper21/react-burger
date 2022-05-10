import { combineReducers } from "redux";
import ingredientsReducer from "./ingredientsReducer";
import currentIngredientReducer from "./currentIngredientReducer";
import burgerReducer from "./burgerReducer";
import orderReducer from "./orderReducer";
import accountReducer from "./accountReducer";
import { TIngredient, TOrder, TUser } from '../../utils/types'

import { TBurgerState } from './burgerReducer';

type TIngredientsState = {
    items: TIngredient[],
    currentTab: string,
    loading: boolean,
    error: string | null,
};


type TOrderState = {
    order: TOrder | null,
    loading: boolean,
    error: string | null,
};

type TAccountState = {
    user: TUser | null,
    loading: boolean,
    error: string | null,
};

type TInitialState = {
    ingredients: TIngredientsState,
    currentIngredient: TIngredient | null | undefined,
    burger: TBurgerState,
    order: TOrderState,
    account: TAccountState,
};

export const initialState: TInitialState = {
    ingredients: {
        items: [],
        currentTab: "bun",
        loading: false,
        error: null,
    },

    currentIngredient: null,
    
    burger: {
        bun: null,
        items: {},
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
