import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../services/types/hooks';
import { Switch, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { restoreUser } from "../../services/AuthService";
import { getIngredients } from "../../services/DataService";
import { wsConnectionPublicInit } from '../../services/actions/websocket';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import GuestRoute from '../GuestRoute/GuestRoute';
import { TRootStore } from "../../services/reducers/rootReducer";

import { AppHeader, Spinner } from '../../ui';
import { HomePage, OrdersFeedPage, IngredientPage, ProfileForm, ProfileOrders, OrderPage, Login, Register, PasswordForgot, PasswordReset, NotFound } from  '../../pages';

function App() {

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(restoreUser())
        dispatch(getIngredients());
        dispatch(wsConnectionPublicInit());
    }, [dispatch]);

    const loading: boolean = useAppSelector((store: TRootStore) => (
        (store.ingredients.loading ?? false) || 
        (store.order.loading ?? false) || 
        (store.account.loading ?? false) || 
        (store.statistic.loading ?? false) ||
        (store.orders.loading ?? false) ||
        false
    ));

    return (
        <>
            <AppHeader />
            {
                (loading) && (
                    <Spinner />
                )
            }
            <DndProvider backend={HTML5Backend}>
                <Switch>
                    <Route path="/" exact={true}>
                        <HomePage />
                    </Route>
                    <Route path="/ingredients/:id" exact={true}>
                        <IngredientPage />
                    </Route>
                    <Route path="/feed/:id" exact={true}>
                        <OrderPage />
                    </Route>
                    <Route path="/feed">
                        <OrdersFeedPage />
                    </Route>
                    <Route path="/profile/orders/:id" exact={true}>
                        <OrderPage />
                    </Route>
                    <Route path="/profile/orders">
                        <ProfileOrders />
                    </Route>
                    <ProtectedRoute path="/profile">
                        <ProfileForm />
                    </ProtectedRoute>
                    <GuestRoute path="/login">
                        <Login />
                    </GuestRoute>
                    <GuestRoute path="/register">
                        <Register />
                    </GuestRoute>
                    <GuestRoute path="/forgot-password">
                        <PasswordForgot />
                    </GuestRoute>
                    <GuestRoute path="/reset-password">
                        <PasswordReset />
                    </GuestRoute>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </DndProvider>
        </>
    );
}

export default App;
