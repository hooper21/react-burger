import { API_URL } from "../config";

import { getIngredientsRequest, getIngredientsSuccess, getIngredientsFailed } from "./actions/ingredients";
import { getOrderRequest, getOrderSuccess, getOrderFailed, setBurgerIngredients } from "./actions/order";

export const getIngredients = () => {
    return (dispatch) => {
        dispatch(getIngredientsRequest());
        fetch(`${API_URL}/ingredients`)
            .then((response) => (response.ok) ? response.json() : null)
            .then((response) => {
                if (response?.success) {
                    dispatch(getIngredientsSuccess(response.data));
                    dispatch(setBurgerIngredients(response.data));
                } else {
                    dispatch(getIngredientsFailed(`Ошибка получения данных. (${response.status}) ${response.statusText}`))
                };
            })
            .catch((error) => dispatch(getIngredientsFailed(error)));
      };
};

export const getOrderNumber = (ids) => {
    return (dispatch) => {
        dispatch(getOrderRequest());
        const body = JSON.stringify({ "ingredients": ids });
        const data = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body
        };
        fetch(`${API_URL}/orders`, data)
          .then((response) => (response.ok) ? response.json() : null)
          .then((response) => {
              if (response?.success)
                  dispatch(getOrderSuccess({ name: response.name, ...response.order}))
              else
                  dispatch(getIngredientsFailed(`Ошибка получения данных. (${response.status}) ${response.statusText}`))
          })
          .catch((error) => dispatch(getOrderFailed(error)));
    };
};
