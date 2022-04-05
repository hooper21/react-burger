import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import { GUEST_ROUTES } from "../../config";

function GuestRoute({ children, ...props }) {
    const { user } = useSelector((store) => store.account);
    const getReturnTo = (location) => {
        const returnTo = location.state?.returnTo || location;
        if ( GUEST_ROUTES && GUEST_ROUTES.includes(returnTo.pathname) ) {
            return { pathname: "/" };
        };
        return returnTo;
    };
    return (
        <Route {...props} render={
            ({ location }) => 
                (!user) ? (
                    children
                ) : (
                    <Redirect to={ getReturnTo(location) } />
                )
        }/>
    );
}

export default GuestRoute;
