import { useState, ChangeEvent, FormEvent } from 'react';
import { useSelector, useDispatch  } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { registerUser } from "../../../services/AuthService";

import { USER_TEST_NAME, USER_TEST_EMAIL, USER_TEST_PASSWORD } from '../../../config';

import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Register.module.css';

const RegistrationPage = () => {
  
    const dispatch = useDispatch();
    const [ values, setValues ] = useState({ name: USER_TEST_NAME, email: USER_TEST_EMAIL, password: USER_TEST_PASSWORD })

    const history = useHistory();
    const { error } = useSelector((store: any) => store.account);
    const hasError = (error) ? true : false;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValues({ ...values, [event.target.name]: event.target.value });
    
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(registerUser(values.name, values.email, values.password, history))
    }

    console.info("error", error);
    
    return (
        <div className={styles.container}>
            <h1 className='text text_type_main-medium mb-6'>Регистрация</h1>
            <form className={styles.form} onSubmit={onSubmit}>
                <Input type="text" name="name" value={values.name} onChange={onChange} size="default" placeholder="Имя" error={hasError} errorText={error} />
                <Input type="email" name="email" value={values.email} onChange={onChange} size="default" placeholder="E-mail" />
                <Input type="password" name="password" value={values.password} onChange={onChange} size="default" placeholder="Введите пароль" />
                <Button type="primary" size="medium">Зарегистрироваться</Button>
            </form>
            <div className={styles.footer + " mt-20"}>
                <span className="text text_type_main-default text_color_inactive">Уже зарегистрированы?
                    <Link to="/login" className={styles.link + " ml-2"}>Войти</Link>
                </span>
            </div>
        </div>
    );
};

export default RegistrationPage;