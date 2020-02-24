import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Nav from './nav';
import '../sass/main.scss';

const Layout = ({ children }) => {
    const {
        site: {
            siteMetadata: { title }
        }
    } = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Nav siteTitle={title} />
            <div>{children}</div>
            <footer className="footer">
                {title} © {new Date().getFullYear()}
            </footer>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
