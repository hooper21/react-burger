import { nanoid } from '@reduxjs/toolkit';
import { ACTION_TYPES } from "./types";


export interface IClearBurger {
    readonly type: typeof ACTION_TYPES.BURGER_CLEAR;
}
export const clearBurger = (): IClearBurger => ({
    type: ACTION_TYPES.BURGER_CLEAR,
});

export interface ISetBurgerBun {
    readonly type: typeof ACTION_TYPES.BURGER_SET_BUN;
    readonly id: string | null | undefined;
};
export const setBurgerBun = (id: string | null | undefined): ISetBurgerBun => ({
    type: ACTION_TYPES.BURGER_SET_BUN,
    id: id
});

export interface IRemoveBurgerBun {
    readonly type: typeof ACTION_TYPES.BURGER_REMOVE_BUN;
    readonly id: string;
};
export const removeBurgerBun = (id: string): IRemoveBurgerBun => ({
    type: ACTION_TYPES.BURGER_REMOVE_BUN,
    id: id
});

export interface IAddBurgerIngredient {
    readonly type: typeof ACTION_TYPES.BURGER_ADD_INGREDIENT;
    readonly id: string;
    readonly uuid: string;
};
export const addBurgerIngredient = (id: string): IAddBurgerIngredient => ({
    type: ACTION_TYPES.BURGER_ADD_INGREDIENT,
    id: id,
    uuid: nanoid(),
});

export interface IRemoveBurgerIngredient {
    readonly type: typeof ACTION_TYPES.BURGER_REMOVE_INGREDIENT;
    readonly uuid: string;
};
export const removeBurgerIngredient = (uuid: string): IRemoveBurgerIngredient => ({
    type: ACTION_TYPES.BURGER_REMOVE_INGREDIENT,
    uuid: uuid,
});

export interface IChangeBurgerIngredient {
    readonly type: typeof ACTION_TYPES.BURGER_REPLACE_INGREDIENTS;
    readonly selected: string;
    readonly target: string;
};
export const changeBurgerIngredients = ({selected, target}: any): IChangeBurgerIngredient => ({
    type: ACTION_TYPES.BURGER_REPLACE_INGREDIENTS,
    selected: selected,
    target: target,
});


export type TBurgerActions =
  | IClearBurger
  | ISetBurgerBun
  | IRemoveBurgerBun
  | IAddBurgerIngredient
  | IRemoveBurgerIngredient
  | IChangeBurgerIngredient;