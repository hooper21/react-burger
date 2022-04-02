import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { currentUser, restoreUser } from "../../services/AuthService";
import { getIngredients } from "../../services/DataService";

import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
import GuestRoute from '../GuestRoute/GuestRoute';

import { AppHeader, Spinner, Modal } from '../../ui/';
import { HomePage, IngredientPage, ProfileForm, ProfileOrders, Login, Register, NotFound } from  '../../pages';
import PasswordForgot from  '../../pages/User/PasswordForgot/PasswordForgot';
import PasswordReset from  '../../pages/User/PasswordReset/PasswordReset';

function App() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(restoreUser())
        dispatch(getIngredients());
    }, [dispatch]);

    const loading = useSelector((store) => ((store.ingredients.loading ?? false) || (store.order.loading ?? false) || (store.account.loading ?? false)));

    return (
        <Router>
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
                    <ProtectedRoute path="/profile/orders">
                        <ProfileOrders />
                    </ProtectedRoute>
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
        </Router>
    );
}

export default App;
