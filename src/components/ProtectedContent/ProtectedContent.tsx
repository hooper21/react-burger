import { Fragment, FC } from "react";
import { useSelector } from "react-redux";
import { RouteProps } from "react-router-dom";
import { TRootStore } from "../../services/reducers/rootReducer";

const ProtectedContent: FC<RouteProps> = ({ children }: RouteProps) => {
    const { user } = useSelector((store: TRootStore) => store.account);
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