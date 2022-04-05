import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const AppHeaderNavLink = ({ title, href, children, className }) => {
    
    return (
        <Link to={href} className={`pl-5 pr-5 mr-2 ${className}`}>
            { children }
            <span className="ml-2">{ title }</span>
        </Link>
    )
};

AppHeaderNavLink.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.any
};

AppHeaderNavLink.defaultProps = {
    className: "text-secondary"
};

export default AppHeaderNavLink;