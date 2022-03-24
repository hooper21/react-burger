import { initialState } from "./rootReducer";
import { ACTION_TYPES } from "../actions/types";

const burgerReducer = (state = initialState.burger, action) => {
    switch (action.type) {
        /*
        case ACTION_TYPES.BURGER_SET_INGREDIENTS:
            return {
                ...state,
                bun: action.items.find((item) => item.type === "bun")?._id,
                items: action.items.filter((item) => item.type !== "bun").reduce((items, item) => ({ ...items, [nanoid()]: item._id }), {}),
            };
        */
        case ACTION_TYPES.BURGER_CLEAR:
            return initialState.burger;
        case ACTION_TYPES.BURGER_SET_BUN: 
            return {
                ...state,
                bun: action.id,
            };
        case ACTION_TYPES.BURGER_REMOVE_BUN:
            return {
                ...state,
                bun: null,
            };
        case ACTION_TYPES.BURGER_ADD_INGREDIENT: 
            return {
                ...state,
                items: { ...state.items, [action.uuid]: action.id },
            };
        case ACTION_TYPES.BURGER_REMOVE_INGREDIENT:
            return {
                ...state,
                items: Object.keys(state.items).filter((uuid) => uuid !== action.uuid).reduce((items, uuid) => ({ ...items, [uuid]: state.items[uuid] }), {}),
            };
        case ACTION_TYPES.BURGER_SET_INGREDIENTS: 
            return {
                ...state,
                items: { ...action.items },
            };
        case ACTION_TYPES.BURGER_REPLACE_INGREDIENTS: {
            const { selected, target } = action;
            let moveDown = false;
            const items = Object.keys(state.items).reduce((items, uuid) => {
                if (uuid === selected) {
                    moveDown = true;
                    return items;
                };
                if (moveDown) {
                    items[uuid] = state.items[uuid];
                };
                if (uuid === target) {
                    items[selected] = state.items[selected];    
                };
                if (!moveDown) {
                    items[uuid] = state.items[uuid];
                };
                return items;
            }, {});
            return {
                ...state,
                items: { ...items },
                //items: { ...state.items, [action.selected]: state.items[action.target], [action.target]: state.items[action.selected]},
            };
        }
            
        default:
            return state;
    };
};

export default burgerReducer;
