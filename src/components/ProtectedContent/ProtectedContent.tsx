import { Fragment } from "react";
import { useSelector } from "react-redux";

const ProtectedContent = ({ children }: any) => {
    const { user } = useSelector((store: any) => store.account);
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