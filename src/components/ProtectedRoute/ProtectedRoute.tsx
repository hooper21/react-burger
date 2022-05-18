import { FC } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useSelector } from 'react-redux';
import { TRootStore } from "../../services/reducers/rootReducer";

const ProtectedRoute: FC<RouteProps> = ({ children, ...props }: RouteProps ) => {
    const { user } = useSelector((store: TRootStore) => store.account);
    return (
        <Route {...props} render={
            ({ location }) => 
                (user) ? (
                    children
                ) : (
                    <Redirect to={{ pathname: '/login', state: { returnTo: location }}}/>
                )
        }/>
    );
};

export default ProtectedRoute;
