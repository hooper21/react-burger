import BurgerIngredients from '../../components/Ingredients/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../../components/Burger/BurgerConstructor/BurgerConstructor';

import styles from './HomePage.module.css';

function HomePage() {
    return (
        <main className={styles.main}>
            <BurgerIngredients />
            <BurgerConstructor />
        </main>
    );
}

export default HomePage;
