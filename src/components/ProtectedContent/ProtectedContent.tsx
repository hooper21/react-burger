import { Fragment, FC } from "react";
import { useSelector } from "react-redux";
import { RouteProps } from "react-router-dom";

const ProtectedContent: FC<RouteProps> = ({ children }: RouteProps) => {
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