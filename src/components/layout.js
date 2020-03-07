import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Nav from './nav';
import Footer from './footer';
import '../sass/main.scss';

const Layout = ({ children, sections, activeSection }) => {
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
            <Nav siteTitle={title} sections={sections} activeSection={activeSection} />
            <div>{children}</div>
            <Footer title={title} />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    sections: PropTypes.arrayOf(PropTypes.string),
    activeSection: PropTypes.string
};

Layout.defaultProps = {
    sections: [],
    activeSection: ``
};

export default Layout;
