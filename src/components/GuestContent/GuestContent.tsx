import { Fragment } from "react";
import { useAppSelector } from '../../services/types/hooks';

const GuestContent = ({ children }: any) => {
    const { user } = useAppSelector((store) => store.account);
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