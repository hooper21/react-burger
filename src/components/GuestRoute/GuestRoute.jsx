import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

function ProtectedRoute({ children, ...props }) {
    const { user } = useSelector((store) => store.account);
    return (
        <Route {...props} render={
            ({ location }) => 
                (!user) ? (
                    children
                ) : (
                    <Redirect to={ location.state?.returnTo || location }/>
                )
        }/>
    );
}

export default ProtectedRoute;
