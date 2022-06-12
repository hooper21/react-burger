import { ingredientsReducer } from './ingredientsReducer';
import { ACTION_TYPES } from "../action-types";
import { initialState } from "../actions/ingredients";
import { TIngredients } from "../../utils/types";

import mockIngredients from "../../utils/mock/ingredients.json";

const testError = "Some account error";

const testIngredients: TIngredients = mockIngredients.slice(0, 5);

const testIngredient01 = mockIngredients[0];
const testIngredient02 = mockIngredients[1];
const testIngredient03 = mockIngredients[2];
const testIngredient04 = mockIngredients[3];

describe("Ingredients reducer", () => {

    it("Should set state GET_INGREDIENTS_REQUEST", () => {
        expect(ingredientsReducer(initialState, {
            type: ACTION_TYPES.GET_INGREDIENTS_REQUEST,
        }))
        .toEqual({
            ...initialState,
            selected: null,
            loading: true,
            error: null,
        });
    });

    it("Should set state GET_INGREDIENTS_SUCCESS", () => {
        const testState = { ...initialState, items: mockIngredients.slice(6, 10) };
        expect(ingredientsReducer(testState, {
            type: ACTION_TYPES.GET_INGREDIENTS_SUCCESS,
            items: testIngredients,
        }))
        .toEqual({
            ...testState,
            loading: false,
            items: testIngredients,
        });
    });

    it("Should set state GET_INGREDIENTS_FAILED", () => {
        expect(ingredientsReducer(initialState, {
            type: ACTION_TYPES.GET_INGREDIENTS_FAILED,
            error: testError,
        }))
        .toEqual({
            ...initialState,
            selected: null,
            loading: false,
            error: testError,
        });
    });

    it("Should set state SET_CURRENT_INGREDIENT", () => {
        const testState = { ...initialState, selected: testIngredient01 };
        const testIngredient = testIngredient02;
        expect(ingredientsReducer(testState, {
            type: ACTION_TYPES.SET_CURRENT_INGREDIENT,
            item: testIngredient,
        }))
        .toEqual({
            ...testState,
            selected: testIngredient,
        });
    });

    it("Should set state SET_CURRENT_TAB", () => {
        const testState = { ...initialState, currentTab: "bun" };
        const testTab = "main";
        expect(ingredientsReducer(testState, {
            type: ACTION_TYPES.SET_CURRENT_TAB,
            currentTab: testTab,
        }))
        .toEqual({
            ...testState,
            currentTab: testTab,
        });
    });

    it("Should set state CLEAR_ERRORS", () => {
        const testState = { ...initialState, error: testError };
        expect(ingredientsReducer(testState, {
            type: ACTION_TYPES.CLEAR_ERRORS,
        }))
        .toEqual({
            ...testState,
            error: null,
        });
    });

});