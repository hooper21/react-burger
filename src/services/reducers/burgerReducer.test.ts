import { burgerReducer } from './burgerReducer';
import { ACTION_TYPES } from "../action-types";
import { TBurgerElements } from "../../utils/types";
import { TBurgerState, initialState } from "../actions/burger";

import mockIngredients from "../../utils/mock/ingredients.json";

const testIngredient01 = mockIngredients[0];
const testIngredient02 = mockIngredients[1];
const testIngredient03 = mockIngredients[2];
const testIngredient04 = mockIngredients[3];

const testBun01Id: string = testIngredient01._id;
const testMain02Id: string = testIngredient02._id;
const testMain03Id: string = testIngredient03._id;
const testMain04Id: string = testIngredient04._id;

const testBurger: TBurgerElements = {
    [testBun01Id]: testBun01Id, 
    [testMain02Id]: testMain02Id, 
    [testMain03Id]: testMain03Id
};

const testBurgerState: TBurgerState = {
    bun: testBun01Id,
    items: testBurger,
};

describe("Burger reducer", () => {

    it("Should set state BURGER_CLEAR", () => {
       const testState = { ...initialState, bun: "60666c42cc7b410027a1a9b2", items: testBurger };
       expect(burgerReducer(testState, {
            type: ACTION_TYPES.BURGER_CLEAR,
        }))
        .toEqual({
            ...initialState,
        });
    });

    it("Should set state BURGER_SET_BUN", () => {
        const testState = { ...initialState, bun: "60666c42cc7b410027a1a9b2" };
        const testId = testBun01Id;
        expect(burgerReducer(testState, {
            type: ACTION_TYPES.BURGER_SET_BUN,
            id: testId
        }))
        .toEqual({
            ...testState,
            bun: testId
        });
    });

    it("Should set state BURGER_REMOVE_BUN", () => {
        const testId = testBun01Id;
        expect(burgerReducer(initialState, {
            type: ACTION_TYPES.BURGER_REMOVE_BUN,
            id: testId
        }))
        .toEqual({
            ...initialState,
            bun: undefined
        });
    });

    it("Should set state BURGER_ADD_INGREDIENT", () => {
        const testId = testMain04Id;
        expect(burgerReducer(testBurgerState, {
            type: ACTION_TYPES.BURGER_ADD_INGREDIENT,
            uuid: testId,
            id: testId
        }))
        .toEqual({
            ...testBurgerState,
            items: { ...testBurgerState.items, [testId]: testId },
        });
    });

    it("Should set state BURGER_REMOVE_INGREDIENT", () => {
        const testId = testMain04Id;
        expect(burgerReducer(testBurgerState, {
            type: ACTION_TYPES.BURGER_REMOVE_INGREDIENT,
            uuid: testId
        }))
        .toEqual({
            ...testBurgerState,
            items: Object.keys(testBurgerState.items).filter((uuid) => uuid !== testId).reduce((items, uuid) => ({ ...items, [uuid]: testBurgerState.items[uuid] }), {}),
        });
    });

    it("Should set state BURGER_REPLACE_INGREDIENTS", () => {
        const testBurger: TBurgerElements = {
            [testBun01Id]: testBun01Id, 
            [testMain03Id]: testMain03Id, 
            [testMain02Id]: testMain02Id
        };
        expect(burgerReducer(testBurgerState, {
            type: ACTION_TYPES.BURGER_REPLACE_INGREDIENTS,
            selected: testMain02Id,
            target: testMain03Id
        }))
        .toEqual({
            ...testBurgerState,
            items: testBurger,
        });
    });

});