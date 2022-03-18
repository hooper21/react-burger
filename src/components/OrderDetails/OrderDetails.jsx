import React, { useState, useEffect, Fragment } from 'react';
import { CheckMarkIcon, LockIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import Spinner from '../Spinner/Spinner';

import { API_URL } from "../../config";
import {orderPropTypes} from '../../utils/types';

import { OrderContext } from '../../services/AppContext';


import styles from './OrderDetails.module.css';

const OrderDetails = () => {

    const { order } = React.useContext(OrderContext);

    order.propTypes = {
        order: orderPropTypes.isRequired,
    }

    const [ state, setState ] = useState({
        loading: false,
        error: null,
    });

    const postOrder = (items) => {
        const body = JSON.stringify({
            "ingredients": items.map((item) => item._id)
        });
        const data = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body
        };
        setState({ ...state, loading: true });
        return fetch(`${API_URL}/orders`, data)
            .then((response) => {
                if (!response.ok) {
                    const error = `Ошибка получения данных. (${response.status}) ${response.statusText}`;
                    console.error(error);
                    setState({ ...state, error: error });
                };
                const contentType = response.headers.get("content-type");
                if (contentType.indexOf("application/json") !== -1) {
                    return response.json();
                };
                return response;
            });
    }

    useEffect(() => {
        if (order.number) {
            return ;
        };
        postOrder(order.items)
            .then((response) => {
                if (response) {
                    if (response.success) {
                        order.name = response.name;
                        order.number = response.order.number;
                    } else {
                        setState({ ...state, error: response.message });
                    };
                };
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setState({ ...state, loading: false });
            })

    }, []);

    return (
        <div className={styles.card + " pt-15 pb-30 pr-25 pl-25"}>
        {
            ( state.loading ) ? 
            (
                <Spinner />
            ) : 
            (
                ( state.error ) ? 
                (
                    <Fragment>
                        <p className="text text_type_main-medium mb-15">Ошибка приложения</p>
                        <span className={styles.icon + " mb-15"}>
                            <LockIcon type="primary" />
                        </span>
                        <p className="text text_type_main-default mb-2">
                            {state.error}
                        </p>
                        <p className="text text_type_main-default text_color_inactive">
                            Повторите попытку позже
                        </p>
                    </Fragment>
                ) :
                (
                    <Fragment>
                        <h3 className={styles.order + " text text_type_digits-large mb-8"}>
                            {order.number}
                        </h3>
                        <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
                        <span className={styles.icon + " mb-15"}>
                            <CheckMarkIcon type="primary" />
                        </span>
                        <p className="text text_type_main-default mb-2">
                            Ваш заказ начали готовить
                        </p>
                        <p className="text text_type_main-default text_color_inactive">
                            Дождитесь готовности на орбитальной станции
                        </p>
                    </Fragment>
                )
            )
        }
        </div>
    )
     
}

export default OrderDetails;