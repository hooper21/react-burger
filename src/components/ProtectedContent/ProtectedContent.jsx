import { Fragment } from "react";
import { useSelector } from "react-redux";
import { currentUser } from "../../services/AuthService";

const ProtectedContent = ({ children }) => {
    const { user } = useSelector((store) => store.account);
    //const user = currentUser();
    if (user) {
        return (
            <Fragment>
                {children}
            </Fragment>
        );
    };
    return null;
};

export default ProtectedContent;