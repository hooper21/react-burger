import { initialState } from "./rootReducer";
import { ACTION_TYPES } from "../actions/types";
import { TIngredientsActions } from "../actions/ingredients";

const currentIngredientReducer = (state = initialState.currentIngredient, action: TIngredientsActions) => {
    switch (action.type) {

      case ACTION_TYPES.SET_CURRENT_INGREDIENT:
            return action.item;

      default:
          return state;
    };
};

export default currentIngredientReducer;
