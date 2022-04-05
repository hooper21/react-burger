import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserInfo, setUserInfo } from "../../../services/AuthService";

import ProfileNavigation from '../../../ui/ProfileNavigation/ProfileNavigation';

import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ProfileForm.module.css';

const ProfileForm = () => {
  
    const { user } = useSelector((store) => store.account);

    const [ values, setValues ] = useState((user?.user) ? { name: user.user.name, email: user.user.email, password: "" } : { name: "", email: "", password: ""})
    const [ changed, setChanged ] = useState(false);

    const resetValues = (user) => {
        setValues({ name: user?.name ?? "", email: user?.email ?? "", password: "" } );
        setChanged(false);
    };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(updateUserInfo());
        resetValues(user.user);
    }, [dispatch, user]);

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(setUserInfo(values.name, values.email, values.password));
        resetValues(user);
        setChanged(false);
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        setChanged(true);
    };

    const onReset = (e) => {
        resetValues(user);
    };

    return (
        <div className={`${styles.container} pr-5 pl-5`}>
            <ProfileNavigation />
            <div className={styles.content}>
                <form className={styles.form} >
                    <Input type="text" name="name" value={ values.name } onChange={onChange} icon="EditIcon" placeholder="Имя" size="default" />
                    <Input type="email" name="email" value={ values.email } onChange={onChange} icon="EditIcon" placeholder="E-mail" size="default" />
                    <Input type="text" name="password" value={ values.password } onChange={onChange} icon="EditIcon" placeholder="Пароль" size="default" />
                    {
                        (changed) && (
                            <div className={styles.buttons}>
                                <Button type="primary" onClick={onSubmit} className={styles.button} size="medium">Сохранить</Button>
                                <Button type="secondary" onClick={onReset} className={styles.button} size="medium">Отмена</Button>
                            </div>
                        )
                    }
                </form>
            </div>
        </div>
    )
}


export default ProfileForm;