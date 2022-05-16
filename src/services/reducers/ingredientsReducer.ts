import { ACTION_TYPES } from "../action-types";
import { TIngredientsActions } from "../actions/ingredients";
import { TIngredient } from '../../utils/types'

type TIngredientsState = {
    items: TIngredient[],
    selected: TIngredient | null| undefined,
    currentTab: string,
    loading: boolean,
    error: string | null,
};

const initialState: TIngredientsState = {
    items: [],
    selected: null,
    currentTab: "bun",
    loading: false,
    error: null,
};

export const ingredientsReducer = (state = initialState, action: TIngredientsActions) => {
    
    switch (action.type) {
    
        case ACTION_TYPES.GET_INGREDIENTS_REQUEST:
            return {
                ...state,
                item: [],
                selected: null,
                loading: true,
                error: null,
            };

        case ACTION_TYPES.GET_INGREDIENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.items,
            };

        case ACTION_TYPES.GET_INGREDIENTS_FAILED:
            return {
                ...state,
                items: [],
                selected: null,
                loading: false,
                error: action.error,
            };

        case ACTION_TYPES.SET_CURRENT_INGREDIENT:
            return {
                ...state,
                selected: action.item,
            };

        case ACTION_TYPES.SET_CURRENT_TAB:
            return {
                ...state,
                currentTab: action.currentTab,
            };

        case ACTION_TYPES.CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
            
    };

};
