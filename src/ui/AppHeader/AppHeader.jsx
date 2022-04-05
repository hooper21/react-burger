import { Link } from "react-router-dom";

import ProtectedContent from "../../components/ProtectedContent/ProtectedContent";
import GuestContent from "../../components/GuestContent/GuestContent";

import NavLink from "../AppHeaderNavLink/AppHeaderNavLink";

import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './AppHeader.module.css';

const AppHeader = () => {
    return (
        <header className={`${styles.header}`}>
            <div className={`${styles.container} pt-4 pb-4`} >
                <nav className={styles.nav}>
                    <NavLink href="/" title="Конструктор" className={styles.primary}>
                        <BurgerIcon type="primary" />
                    </NavLink>
                    <NavLink href="/profile/orders" title="Лента заказов" className={styles.secondary}>
                        <ListIcon type="secondary" />
                    </NavLink>
                </nav>

                <div className={styles.logo}>
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>

                <div className={styles.user}>
                    <ProtectedContent>
                        <NavLink href="/profile" title="Личный кабинет" className={styles.secondary}>
                            <ProfileIcon type="secondary" />
                        </NavLink>
                    </ProtectedContent>
                    <GuestContent>
                        <NavLink href="/login" title="Вход" className={styles.secondary}>
                            <ProfileIcon type="secondary" />
                        </NavLink>
                    </GuestContent>
                </div>
                
            </div>
        </header>
    )
}

export default AppHeader;