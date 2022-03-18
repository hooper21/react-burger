import React, { useState, useEffect } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Spinner from '../Spinner/Spinner';

import { IngredientsContext, OrderContext, blankOrder } from '../../services/AppContext';

import { API_URL } from "../../config";

import styles from './App.module.css';

function App() {

  const [state, setState] = useState({
      ingredients: [],
      order: blankOrder,
      loading: false,
      error: null,
  });

  const createBurgerOrder = (items) => {
      const order = {
          number: null,
          name: null,
          total: 0,
          items: []
      };
      order.items = items.filter((item) => item.type !== "bun");
      const bun = items.find((item) => item.type === "bun");
      order.items = [bun, ...order.items];
      order.items.map((item) => {
          order.total += (item.type === "bun") ? 2 * item.price : item.price
      });
      
      return order;
  };
  
  
  useEffect(() => {
    setState({ ...state, loading: true });
    fetch(`${API_URL}/ingredients`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          const error = `Ошибка получения данных. (${response.status}) ${response.statusText}`;
          setState({ ...state, loading: false, error: error });
          return null;
        };
      })
      .then((response) => {
        if (response.success) {
          const ingredients = response.data;
          const order = createBurgerOrder(ingredients);
          setState({ ...state, loading: false, ingredients: ingredients, order: order });
        } else {
          setState({ ...state, loading: false, error: response.status });  
        };
      })
      .catch((error) => {
        setState({ ...state, loading: false, error: error });
      })
  }, []);

  const { loading, ingredients, order } = state;
  
  return (
      ( loading ) ? (
        <Spinner />
      ) : (
        <IngredientsContext.Provider value={{ingredients}}>
          <OrderContext.Provider value={{order}}>
            <AppHeader />
            <main className={styles.main}>
              <BurgerIngredients />
              <BurgerConstructor />
            </main>
          </OrderContext.Provider>
        </IngredientsContext.Provider>
      )
    
  );
}

export default App;
