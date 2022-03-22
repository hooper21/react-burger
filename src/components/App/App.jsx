import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { getIngredients } from "../../services/DataService";

import AppHeader from '../../ui/AppHeader/AppHeader';
import Spinner from '../../ui/Spinner/Spinner';
import BurgerIngredients from '../Ingredients/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../Burger/BurgerConstructor/BurgerConstructor';

import styles from './App.module.css';

function App() {

    const dispatch = useDispatch();
    const loading = useSelector((store) => (store.ingredients.loading ?? store.order.loading));

    useEffect(() => dispatch(getIngredients()), [dispatch]);

    if ( loading ) {
        return (
            <Spinner />
        );
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <AppHeader />
            <main className={styles.main}>
                <BurgerIngredients />
                <BurgerConstructor />
            </main>
        </DndProvider>
    );
}

export default App;
