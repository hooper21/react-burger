import React from "react";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import NavLink from "../AppHeaderNavLink/AppHeaderNavLink";

import styles from './AppHeader.module.css';

const AppHeader = () => {
    return (
        <header className={`${styles.header}`}>
            <div className={`${styles.container} pt-4 pb-4`} >
                <nav className={styles.nav}>
                    <NavLink title="Конструктор" className={styles.primary} href="/order">
                        <BurgerIcon type="primary" />
                    </NavLink>
                    <NavLink title="Лента заказов" className={styles.secondary} href="/orders">
                        <ListIcon type="secondary" />
                    </NavLink>
                </nav>

                <div className={styles.logo}>
                    <a href="/">
                        <Logo />
                    </a>
                </div>

                <div className={styles.user}>
                    <NavLink title="Личный кабинет" className={styles.secondary} href="/profile">
                        <ProfileIcon type="secondary" />
                    </NavLink>
                </div>
                
            </div>
        </header>
    )
}

export default AppHeader;