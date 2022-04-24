import { ACTION_TYPES } from "./types";
import { TIngredient } from "../../utils/types";

export const getIngredientsRequest = () => ({
    type: ACTION_TYPES.GET_INGREDIENTS_REQUEST,
});

export const getIngredientsSuccess = (items: TIngredient[]) => ({
    type: ACTION_TYPES.GET_INGREDIENTS_SUCCESS,
    items: items,
});

export const getIngredientsFailed = (error: string) => ({
    type: ACTION_TYPES.GET_INGREDIENTS_FAILED,
    error: error,
});

export const setCurrentIngredient = (item: TIngredient | null | undefined) => ({
    type: ACTION_TYPES.SET_CURRENT_INGREDIENT,
    item,
});

export const setCurrentTab = (currentTab: string) => ({
    type: ACTION_TYPES.SET_CURRENT_TAB,
    currentTab,
});

export const hideIngredientsErrors = () => ({
    type: ACTION_TYPES.CLEAR_ERRORS,
});