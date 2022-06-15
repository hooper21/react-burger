import React, { Fragment } from "react";
import { useAppSelector } from '../../services/types/hooks';

type TGuestContent ={
    children: React.ReactNode;
};

const GuestContent = ({ children }: TGuestContent) => {
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