import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Link, useLocation, useHistory } from 'react-router-dom';
import { logoutUser } from "../../services/AuthService";

import styles from './ProfileNavigation.module.css';

const ProfileNavigation = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onLogoutClick = (event: MouseEvent) => {
        dispatch(logoutUser(history));
    };

    const { pathname } = useLocation();

    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.list__item}>
                    <NavLink to="/profile" exact={true} className={styles.link + " text text_type_main-medium"} activeClassName={styles.link_active}>
                        Профиль
                    </NavLink>
                </li>
                <li className={styles.list__item}>
                    <NavLink to="/profile/orders" exact={true} className={styles.link + " text text_type_main-medium"} activeClassName={styles.link_active}>
                        История заказов
                    </NavLink>
                </li>
                <li className={styles.list__item}>
                    <Link to="/logout" onClick={onLogoutClick} className={styles.link + " text text_type_main-medium"}>
                        Выход
                    </Link>
                </li>
            </ul>

            {pathname === '/profile' && <span className={styles.description + " text text_type_main-small text_color_inactive"}>
                В этом разделе вы можете
                изменить свои персональные данные
            </span>}
            {pathname === '/profile/orders' && <span className={styles.description + " text text_type_main-small text_color_inactive"}>
                В этом разделе вы можете просмотреть свою историю заказов
            </span>}
        </nav>
    )
}

export default ProfileNavigation;