import { FC } from "react";
import { Link } from "react-router-dom";

type TParams = {
    title: string,
    href?: any,
    className?: string,
    children?: any
};

const AppHeaderNavLink: FC<TParams> = ({ title, href, children, className }: TParams) => {
    
    return (
        <Link to={href} className={`pl-5 pr-5 mr-2 ${className}`}>
            { children }
            <span className="ml-2">{ title }</span>
        </Link>
    )
};


export default AppHeaderNavLink;