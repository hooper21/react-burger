import http from "./HttpProvider";

import { getIngredientsRequest, getIngredientsSuccess, getIngredientsFailed } from "./actions/ingredients";
import { getOrderRequest, getOrderSuccess, getOrderFailed } from "./actions/order";

export const getIngredients = () => {
    return (dispatch) => {
        dispatch(getIngredientsRequest());
        http
            .get("/ingredients")
            .then((response) => {
                if (response?.success) {
                    const ingredients = response.data;
                    dispatch(getIngredientsSuccess(ingredients));
                } else {
                    const error = `Ошибка получения данных. (${response.status}) ${response.statusText}`;
                    dispatch(getIngredientsFailed(error));
                };
            })
            .catch((error) => {
                dispatch(getIngredientsFailed(error))
            });
      };
};

export const getOrderNumber = (ids) => {
    return (dispatch) => {
        dispatch(getOrderRequest());
        http
            .post("/orders", { ingredients: ids })
            .then((response) => {
                if (response?.success) {
                    var orderData = { name: response.name, ...response.order};
                    dispatch(getOrderSuccess(orderData))
                }
                else 
                {
                    const error = `Ошибка получения данных. (${response.status}) ${response.statusText}`;
                    dispatch(getIngredientsFailed(error));
                }
            })
            .catch((error) => {
                dispatch(getOrderFailed(error))
            });
    };
};

export const redirectTo = (url) => {
    window.location = url;
};

export const setLocation = (url) => {
    window.history.pushState({}, undefined, url);
};