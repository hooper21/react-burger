import { Fragment } from "react";
import { useSelector } from 'react-redux';
import { TRootStore } from "../../services/reducers/rootReducer";

const GuestContent = ({ children }: any) => {
    const { user } = useSelector((store: TRootStore) => store.account);
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