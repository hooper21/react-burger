import { FC } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAppSelector } from '../../services/types/hooks';

const ProtectedRoute: FC<RouteProps> = ({ children, ...props }: RouteProps ) => {
    const { user } = useAppSelector((store) => store.account);
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
