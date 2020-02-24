import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Nav = ({ siteTitle }) => (
    <nav className="nav">
        <h1 className="nav-logo">
            <Link to="/">{siteTitle}</Link>
        </h1>
        <ul className="nav-list">
            <li className="nav-list__item">
                <Link to="/">About</Link>
            </li>
            <li className="nav-list__item">
                <Link to="/projects">Projects</Link>
            </li>
            <li className="nav-list__item">
                <Link to="/uses">Uses</Link>
            </li>
            <li className="nav-list__item">
                <Link to="/blog">Blog</Link>
            </li>
        </ul>
    </nav>
);

Nav.propTypes = {
    siteTitle: PropTypes.string
};

Nav.defaultProps = {
    siteTitle: ``
};

export default Nav;
