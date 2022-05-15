import { ACTION_TYPES } from "../action-types";
import { TIngredientsActions } from "../actions/ingredients";
import { TIngredient } from '../../utils/types'


const initialState: TIngredient | null| undefined = null;

export const currentIngredientReducer = (state = initialState, action: TIngredientsActions) => {
    
    switch (action.type) {

      case ACTION_TYPES.SET_CURRENT_INGREDIENT:
            return action.item;

      default:
          return state;
          
    };

};
