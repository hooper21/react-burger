import { Fragment } from "react";
import { useSelector } from 'react-redux';

const GuestContent = ({ children }: any) => {
    const { user } = useSelector((store: any) => store.account);
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