import { Fragment } from "react";
import { useSelector } from 'react-redux';
import { currentUser } from "../../services/AuthService";

const GuestContent = ({ children }) => {
    const { user } = useSelector((store) => store.account);
    //const user = currentUser();
    if (user) {
        return null;
    };
    return (
        <Fragment>
            {children}
        </Fragment>
    );
};

export default GuestContent;