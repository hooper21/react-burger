
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import styles from './OrderDetails.module.css';

const OrderDetails = ({order}) => {

    return (
        <div className={styles.card + " pt-15 pb-30 pr-25 pl-25"}>
            <h3 className={styles.order + " text text_type_digits-large mb-8"}>
                { order.number }
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
        </div>
    )
     
}

export default OrderDetails;