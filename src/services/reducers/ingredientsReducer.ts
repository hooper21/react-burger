import { initialState } from "./rootReducer";
import { ACTION_TYPES } from "../actions/types";
import { TIngredientsActions } from "../actions/ingredients";

const ingredientsReducer = (state = initialState.ingredients, action: TIngredientsActions) => {
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

export default ingredientsReducer;
