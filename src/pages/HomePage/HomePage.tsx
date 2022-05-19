import { FC } from 'react';
import IngredientsList from '../../components/Ingredients/IngredientsList/IngredientsList';
import BurgerConstructor from '../../components/Burger/BurgerConstructor/BurgerConstructor';

import styles from './HomePage.module.css';

const HomePage: FC = () => {
    return (
        <main className={styles.main}>
            <IngredientsList />
            <BurgerConstructor />
        </main>
    );
}

export default HomePage;
