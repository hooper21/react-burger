import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { loginUser } from "../../../services/AuthService";

import { USER_TEST_EMAIL, USER_TEST_PASSWORD } from '../../../config';

import { Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Login.module.css";

function Login() {
  
    const dispatch = useDispatch();
    const [ values, setValues ] = useState({ email: USER_TEST_EMAIL, password: USER_TEST_PASSWORD })

    const history = useHistory();
    const { error } = useSelector((store) => store.account);
    const hasError = (error) ? true : false;

    const onChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(values.email, values.password, history))
    }

    return (
        <div className={styles.container}>
            <h1 className="text text_type_main-medium mb-6">Вход</h1>
            <form className={styles.form} onSubmit={onSubmit}>
                <Input type="email" name="email" value={values.email} onChange={onChange} size="default" placeholder="E-mail" error={hasError} errorText={error} />
                <PasswordInput name="password" value={values.password} onChange={onChange} size="default" placeholder="Введите пароль" />
                <Button type="primary" size="medium">Войти</Button>
            </form>
            <div className={styles.footer + " mt-20"}>
                <span className="text text_type_main-default text_color_inactive mb-4">Вы — новый пользователь?
                    <Link to="/register" className={styles.link + " ml-2"}>Зарегистрироваться</Link>
                </span>
                <span className="text text_type_main-default text_color_inactive">Забыли пароль?
                    <Link to="/forgot-password" className={styles.link + " ml-2"}>Восстановить пароль</Link>
                </span>
            </div>
        </div>
    );
}

export default Login;
