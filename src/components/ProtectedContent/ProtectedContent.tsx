import { Fragment, FC } from "react";
import { RouteProps } from "react-router-dom";
import { useAppSelector } from '../../services/types/hooks';

const ProtectedContent: FC<RouteProps> = ({ children }: RouteProps) => {
    const { user } = useAppSelector((store) => store.account);
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