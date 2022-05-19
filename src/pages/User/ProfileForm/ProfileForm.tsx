import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../../services/types/hooks';
import { TUser } from "../../../utils/types";

import { updateUserInfo, setUserInfo } from "../../../services/AuthService";

import ProfileNavigation from '../../../ui/ProfileNavigation/ProfileNavigation';

import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ProfileForm.module.css';

const ProfileForm = () => {
  
    const { user } = useAppSelector((store) => store.account);

    const [ values, setValues ] = useState((user) ? { name: user.name, email: user.email, password: "" } : { name: "", email: "", password: ""})
    const [ changed, setChanged ] = useState(false);

    const resetValues = (user: TUser) => {
        setValues({ name: user?.name ?? "", email: user?.email ?? "", password: "" } );
        setChanged(false);
    };

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(updateUserInfo());
        if (user) {
            resetValues(user);
        };
    }, [dispatch, user]);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
        setChanged(true);
    };

    const onSubmit = () => {
        dispatch(setUserInfo(values.name, values.email, values.password));
        if (user) {
            resetValues(user);
        };
        setChanged(false);
    };

    const onReset = () => {
        if (user) {
            resetValues(user);
        };
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
                                <Button type="primary" onClick={() => onSubmit()} size="medium">Сохранить</Button>
                                <Button type="secondary" onClick={() => onReset()} size="medium">Отмена</Button>
                            </div>
                        )
                    }
                </form>
            </div>
        </div>
    )
}


export default ProfileForm;