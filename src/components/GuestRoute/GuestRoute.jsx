import { Route, Redirect } from "react-router-dom";
//import { useSelector } from 'react-redux';
import { currentUser } from "../../services/AuthService";

function GuestRoute({ children, ...props }) {
    //const { user } = useSelector((store) => store.account);
    const user = currentUser();
    return (
        <Route {...props} exact={true} render={
            ({ location }) => 
                (user) ? (
                    <Redirect to={{ pathname: '/', state: { from: location }}}/>
                ) : (
                    children
                )
        }/>
    );
}

export default GuestRoute;
