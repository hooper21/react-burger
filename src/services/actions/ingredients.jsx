import { ACTION_TYPES } from "./types";

export const getIngredientsRequest = () => ({
    type: ACTION_TYPES.GET_INGREDIENTS_REQUEST,
});

export const getIngredientsSuccess = (items) => ({
    type: ACTION_TYPES.GET_INGREDIENTS_SUCCESS,
    items: items,
});

export const getIngredientsFailed = (error) => ({
    type: ACTION_TYPES.GET_INGREDIENTS_FAILED,
    error: error,
});

export const setCurrentIngredient = (item) => ({
    type: ACTION_TYPES.SET_CURRENT_INGREDIENT,
    item,
});

export const setCurrentTab = (currentTab) => ({
    type: ACTION_TYPES.SET_CURRENT_TAB,
    currentTab,
});

export const hideIngredientsErrors = () => ({
    type: ACTION_TYPES.CLEAR_ERRORS,
});