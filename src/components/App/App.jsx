import React, { useState } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

import styles from './App.module.css';

import defaultIngredients from "../../utils/ingredients.json";
import defaultBurger from "../../utils/burger.json";

function App() {
  
  const [ ingredients, useIngredients ] = useState(defaultIngredients);
  const [ burger, useBurger ] = useState(defaultBurger);

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients defaultItems={ingredients} className={styles.block}/>
        <BurgerConstructor defaultItems={burger} className={styles.block}/>
      </main>
  </>
  );
}

export default App;
