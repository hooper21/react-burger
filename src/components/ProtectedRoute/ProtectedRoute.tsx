import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

function ProtectedRoute({ children, ...props }: any) {
    const { user } = useSelector((store: any) => store.account);
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
