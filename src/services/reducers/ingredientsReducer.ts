import { ACTION_TYPES } from "../action-types";
import { TIngredientsActions } from "../actions/ingredients";
import { TIngredient } from '../../utils/types'

type TIngredientsState = {
    items: TIngredient[],
    currentTab: string,
    loading: boolean,
    error: string | null,
};

const initialState: TIngredientsState = {
    items: [],
    currentTab: "bun",
    loading: false,
    error: null,
};

export const ingredientsReducer = (state = initialState, action: TIngredientsActions) => {
    
    switch (action.type) {
    
        case ACTION_TYPES.GET_INGREDIENTS_REQUEST:
            return {
                ...state,
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
                loading: false,
                error: action.error,
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
