import { useState, ChangeEvent, FormEvent } from "react";
import { useAppSelector, useAppDispatch } from '../../../services/types/hooks';
import { Link, useHistory } from "react-router-dom";

import { loginUser } from "../../../services/AuthService";

import { USER_TEST_EMAIL, USER_TEST_PASSWORD } from '../../../config';

import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Login.module.css";

const Login = () => {
  
    const dispatch = useAppDispatch();
    const [ values, setValues ] = useState({ email: USER_TEST_EMAIL, password: USER_TEST_PASSWORD })

    const history = useHistory();
    const { error } = useAppSelector((store) => store.account);
    const hasError = (error) ? true : false;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValues({ ...values, [event.target.name]: event.target.value });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(loginUser(values.email, values.password, history))
    }

    return (
        <div className={styles.container}>
            <h1 className="text text_type_main-medium mb-6">Вход</h1>
            <form className={styles.form} onSubmit={onSubmit}>
                <Input type="email" name="email" value={values.email} onChange={onChange} size="default" placeholder="E-mail" error={hasError} errorText={error} />
                <Input type="password" name="password" value={values.password} onChange={onChange} size="default" placeholder="Введите пароль" />
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
