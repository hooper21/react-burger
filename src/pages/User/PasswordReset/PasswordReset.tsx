import { useState, ChangeEvent, FormEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../../services/types/hooks';
import { Link, useHistory } from 'react-router-dom';
import { resetPassword } from "../../../services/AuthService";
import { TRootStore } from "../../../services/reducers/rootReducer";

import { USER_TEST_PASSWORD } from '../../../config';

import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './PasswordReset.module.css';

const PasswordReset = () => {
  
    const dispatch = useAppDispatch();
    const [ values, setValues ] = useState({ token: USER_TEST_PASSWORD, password: USER_TEST_PASSWORD })

    const history = useHistory();
    const { error } = useAppSelector((store: TRootStore) => store.account);
    const hasError = (error) ? true : false;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValues({ ...values, [event.target.name]: event.target.value });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(resetPassword(values.token, values.password, history))
    }

    return (
        <div className={styles.container}>
            <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
            <form className={styles.form} onSubmit={onSubmit}>
                <Input type="text" name="token" value={values.token} onChange={onChange} size="default" placeholder="Введите код из письма" error={hasError} errorText={error} />
                <Input type="password" name="password" value={values.password} onChange={onChange} size="default" placeholder="Введите новый пароль" />
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