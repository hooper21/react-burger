import { Fragment } from "react";
import { useSelector } from "react-redux";

const ProtectedContent = ({ children }) => {
    const { user } = useSelector((store) => store.account);
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