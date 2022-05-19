import { getIngredientsRequest, getIngredientsSuccess, getIngredientsFailed } from "./actions/ingredients";
import { getOrderRequest, getOrderSuccess, getOrderFailed } from "./actions/order";
import http from "./HttpProvider";
import { AppDispatch } from './types';
import { TResponceIngredients } from '../utils/responses';


export const getIngredients = () => {
    return (dispatch: AppDispatch) => {
        dispatch(getIngredientsRequest());
        http
            .get<any, TResponceIngredients>("/ingredients")
            .then((data: TResponceIngredients) => {
                if (data?.success) {
                    const ingredients = data.data;
                    dispatch(getIngredientsSuccess(ingredients));
                } else {
                    const error = `Ошибка получения данных. (${data.status}) ${data.statusText}`;
                    dispatch(getIngredientsFailed(error));
                };
            })
            .catch((error) => {
                dispatch(getIngredientsFailed(error))
            });
      };
};

export const getOrderNumber = (ids: string[]) => {
    return (dispatch: AppDispatch) => {
        dispatch(getOrderRequest());
        http
            .post("/orders", { ingredients: ids })
            .then((data: any) => {
                console.log("getOrderNumber", data);
                if (data?.success) {
                    var orderData = { name: data.name, ...data.order};
                    dispatch(getOrderSuccess(orderData))
                }
                else 
                {
                    const error = `Ошибка получения данных. (${data.status}) ${data.statusText}`;
                    dispatch(getIngredientsFailed(error));
                }
            })
            .catch((error) => {
                dispatch(getOrderFailed(error))
            });
    };
};

export const redirectTo = (url: (string | Location) & Location) => {
    window.location = url;
};

export const setLocation = (url: string) => {
    window.history.pushState({}, "", url);
};