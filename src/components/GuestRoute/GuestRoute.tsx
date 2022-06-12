import { Route, Redirect, RouteProps } from "react-router-dom";
import { GUEST_ROUTES } from "../../config";
import { useAppSelector } from '../../services/types/hooks';

function GuestRoute({ children, ...props }: RouteProps) {
    const { user } = useAppSelector((store) => store.account);
    const getReturnTo = (location: any) => {
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
