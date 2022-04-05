import { nanoid } from '@reduxjs/toolkit';

import { ACTION_TYPES } from "./types";

export const getOrderRequest = () => ({
    type: ACTION_TYPES.GET_ORDER_REQUEST,
});

export const getOrderSuccess = (order) => ({
    type: ACTION_TYPES.GET_ORDER_SUCCESS,
    order: order,
});

export const getOrderFailed = (error) => ({
    type: ACTION_TYPES.GET_ORDER_FAILED,
    error: error
});

export const hideOrderErrors = () => ({
    type: ACTION_TYPES.CLEAR_ERRORS,
});

/*
export const setBurgerIngredients = (items) => ({
    type: ACTION_TYPES.BURGER_SET_INGREDIENTS,
    items: items,
});
*/

export const clearBurger = () => ({
    type: ACTION_TYPES.BURGER_CLEAR,
});

export const setBurgerBun = (id) => ({
    type: ACTION_TYPES.BURGER_SET_BUN,
    id: id
});

export const removeBurgerBun= (id) => ({
    type: ACTION_TYPES.BURGER_REMOVE_BUN,
    id: id
});

export const addBurgerIngredient = (id) => ({
    type: ACTION_TYPES.BURGER_ADD_INGREDIENT,
    id: id,
    uuid: nanoid(),
});

export const removeBurgerIngredient = (uuid) => ({
    type: ACTION_TYPES.BURGER_REMOVE_INGREDIENT,
    uuid: uuid,
});

export const changeBurgerIngredients = ({selected, target}) => ({
    type: ACTION_TYPES.BURGER_REPLACE_INGREDIENTS,
    selected: selected,
    target: target,
});

