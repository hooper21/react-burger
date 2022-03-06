import React from "react";
import PropTypes from 'prop-types';

import styles from './AppHeaderNavLink.module.css';

const NavLink = ({ title, href, children, className }) => {
    
    return (
        <a className={`pl-5 pr-5 mr-2 ${className}`} href={href}>
            { children }
            <span className="ml-2">{ title }</span>
        </a>
    )
};

NavLink.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.any
};

NavLink.defaultProps = {
    className: "text-secondary"
};

export default NavLink;