import { ACTION_TYPES } from "./types";
import { TIngredient } from "../../utils/types";

export interface IGetIngredientsRequest {
    readonly type: typeof ACTION_TYPES.GET_INGREDIENTS_REQUEST;
};
export const getIngredientsRequest = (): IGetIngredientsRequest => ({
    type: ACTION_TYPES.GET_INGREDIENTS_REQUEST,
});

export interface IGetIngredientsSuccess {
    readonly type: typeof ACTION_TYPES.GET_INGREDIENTS_SUCCESS;
    readonly items: TIngredient[];
};
export const getIngredientsSuccess = (items: TIngredient[]): IGetIngredientsSuccess => ({
    type: ACTION_TYPES.GET_INGREDIENTS_SUCCESS,
    items: items,
});

export interface IGetIngredientsFailed {
    readonly type: typeof ACTION_TYPES.GET_INGREDIENTS_FAILED;
    readonly error: string;
};
export const getIngredientsFailed = (error: string): IGetIngredientsFailed => ({
    type: ACTION_TYPES.GET_INGREDIENTS_FAILED,
    error: error,
});

export interface ISetCurrentIngredient {
    readonly type: typeof ACTION_TYPES.SET_CURRENT_INGREDIENT;
    readonly item: TIngredient | null | undefined;
};
export const setCurrentIngredient = (item: TIngredient | null | undefined): ISetCurrentIngredient => ({
    type: ACTION_TYPES.SET_CURRENT_INGREDIENT,
    item,
});

export interface ISetCurrentTab {
    readonly type: typeof ACTION_TYPES.SET_CURRENT_TAB;
    readonly currentTab: string;
};
export const setCurrentTab = (currentTab: string): ISetCurrentTab => ({
    type: ACTION_TYPES.SET_CURRENT_TAB,
    currentTab,
});

export interface IHideIngredientsErrors {
    readonly type: typeof ACTION_TYPES.CLEAR_ERRORS;
};
export const hideIngredientsErrors = (): IHideIngredientsErrors => ({
    type: ACTION_TYPES.CLEAR_ERRORS,
});


export type TIngredientsActions =
    | IGetIngredientsRequest
    | IGetIngredientsSuccess
    | IGetIngredientsFailed
    | ISetCurrentIngredient
    | ISetCurrentTab
    | IHideIngredientsErrors;