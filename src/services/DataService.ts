import { getIngredientsRequest, getIngredientsSuccess, getIngredientsFailed } from "./actions/ingredients";
import { getOrderRequest, getOrderSuccess, getOrderFailed } from "./actions/order";
import http from "./HttpProvider";

export const getIngredients = () => {
    return (dispatch: any) => {
        dispatch(getIngredientsRequest());
        http
            .get("/ingredients")
            .then((response: any) => {
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

export const getOrderNumber = (ids: string[]) => {
    return (dispatch: any) => {
        dispatch(getOrderRequest());
        http
            .post("/orders", { ingredients: ids })
            .then((response: any) => {
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

export const redirectTo = (url: any) => {
    window.location = url;
};

export const setLocation = (url: any) => {
    window.history.pushState({}, "", url);
};