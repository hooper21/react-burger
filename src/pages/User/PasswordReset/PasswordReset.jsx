import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import { resetPassword } from "../../../services/AuthService";

import { USER_TEST_PASSWORD } from '../../../config';

import { PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './PasswordReset.module.css';

const PasswordReset = () => {
  
    const dispatch = useDispatch();
    const [ values, setValues ] = useState({ token: USER_TEST_PASSWORD, password: USER_TEST_PASSWORD })

    const history = useHistory();
    const { error } = useSelector((store) => store.account);
    const hasError = (error) ? true : false;

    const onChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(resetPassword(values.token, values.password, history))
    }

    return (
        <div className={styles.container}>
            <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
            <form className={styles.form} onSubmit={onSubmit}>
                <Input type="text" name="token" value={values.token} onChange={onChange} size="default" placeholder="Введите код из письма" error={hasError} errorText={error} />
                <PasswordInput name="password" value={values.password} onChange={onChange} size="default" placeholder="Введите новый пароль" />
                <Button type="primary" size="medium">Сохранить</Button>
            </form>
            <div className={styles.footer + " mt-20"}>
                <span className="text text_type_main-default text_color_inactive">Вспомнили пароль?
                    <Link to="/login" className={styles.link + " ml-2"}>Войти</Link>
                </span>
            </div>
        </div>
    )
}

export default PasswordReset;