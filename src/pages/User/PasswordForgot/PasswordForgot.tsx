import { useState, ChangeEvent, FormEvent  } from 'react';
import { useAppSelector, useAppDispatch } from '../../../services/types/hooks';
import { Link, useHistory } from 'react-router-dom';
import { forgotPassword } from "../../../services/AuthService";

import { USER_TEST_EMAIL } from '../../../config';

import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './PasswordForgot.module.css';

const ForgotPasswordPage = () => {
  
    const dispatch = useAppDispatch();
    const [ values, setValues ] = useState({ email: USER_TEST_EMAIL })

    const history = useHistory();
    const { error } = useAppSelector((store) => store.account);
    const hasError = (error) ? true : false;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValues({ ...values, [event.target.name]: event.target.value });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(forgotPassword(values.email, history))
    };

    return (
        <div className={styles.container}>
            <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
            <form className={styles.form} onSubmit={onSubmit}>
                <Input type="email" name="email" value={values.email} onChange={onChange} size="default" placeholder="Укажите e-mail" error={hasError} errorText={error} />
                <Button type="primary" size="medium">Восстановить</Button>
            </form>
            <div className={styles.footer + " mt-20"}>
                <span className="text text_type_main-default text_color_inactive">Вспомнили пароль?
                    <Link to="/login" className={styles.link + " ml-2"}>Войти</Link>
                </span>
            </div>
        </div>
    )

}

export default ForgotPasswordPage;