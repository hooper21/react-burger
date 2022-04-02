import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import { currentUser } from "../../services/AuthService";

function ProtectedRoute({ children, ...props }) {
    const { user } = useSelector((store) => store.account);
    //const user = currentUser();
    return (
        <Route {...props} exact={true} render={
            ({ location }) => 
                (user) ? (
                    children
                ) : (
                    <Redirect to={{ pathname: '/login', state: { from: location }}}/>
                )
        }/>
    );
}

export default ProtectedRoute;
