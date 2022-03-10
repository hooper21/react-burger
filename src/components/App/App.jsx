import React, { useState, useEffect } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Spinner from '../Spinner/Spinner';


import { API_URL } from "../../config";
//import defaultIngredients from "../../utils/ingredients.json";
import defaultOrder from "../../utils/order.json";

import styles from './App.module.css';

function App() {

  const [state, setState] = useState({
      ingredients: [],
      order: defaultOrder,
      loading: false,
      error: null,
  });
  
  const loadIngredients = () => {
    setState({ ...state, loading: true });
    fetch(`${API_URL}/ingredients`)
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          setState({ ...state, loading: false, ingredients: response.data });
        } else {
          setState({ ...state, loading: false, error: response.status });  
        };
      })
      .catch((error) => {
        setState({ ...state, loading: false, error: error });
      })
  };
  
  useEffect(() => loadIngredients(), []);

  const { loading, ingredients, order } = state;
  
  return (
    <>
      <AppHeader />
      {
        (!loading) ? (
          <main className={styles.main}>
            <BurgerIngredients items={ingredients} className={styles.block}/>
            <BurgerConstructor data={order} className={styles.block}/>
          </main>
        ) : (
          <Spinner />
        )
      }
      
  </>
  );
}

export default App;
