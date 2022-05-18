import { ACTION_TYPES } from "../action-types";
import { TIngredientsActions, TIngredientsState, initialState } from "../actions/ingredients";

export const ingredientsReducer = (state = initialState, action: TIngredientsActions): TIngredientsState => {
    
    switch (action.type) {
    
        case ACTION_TYPES.GET_INGREDIENTS_REQUEST:
            return {
                ...state,
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
