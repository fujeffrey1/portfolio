import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import CodeIcon from 'icons/code.svg';
import InfoIcon from 'icons/info.svg';
import ProjectIcon from 'icons/project.svg';
import PencilIcon from 'icons/pencil.svg';
import EnvelopIcon from 'icons/envelop.svg';

const Nav = ({ siteTitle }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function handleScroll(event) {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else if (window.scrollY === 0) {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
            <h1 className="nav-logo">
                <AnchorLink href="#___gatsby">{siteTitle}</AnchorLink>
                <CodeIcon />
            </h1>
            <ul className="nav-list">
                <li className="nav-list__item">
                    <InfoIcon />
                    <AnchorLink href="#section-about">About</AnchorLink>
                </li>
                <li className="nav-list__item">
                    <ProjectIcon />
                    <AnchorLink href="#section-projects">Projects</AnchorLink>
                </li>
                <li className="nav-list__item">
                    <PencilIcon />
                    <AnchorLink href="#section-blog">Blog</AnchorLink>
                </li>
                <li className="nav-list__item">
                    <EnvelopIcon />
                    <AnchorLink href="#section-contact">Contact</AnchorLink>
                </li>
            </ul>
        </nav>
    );
};

Nav.propTypes = {
    siteTitle: PropTypes.string
};

Nav.defaultProps = {
    siteTitle: ``
};

export default Nav;
