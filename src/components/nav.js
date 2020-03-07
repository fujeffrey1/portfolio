import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import CodeIcon from 'icons/code.svg';
import InfoIcon from 'icons/info.svg';
import ProjectIcon from 'icons/project.svg';
import PencilIcon from 'icons/pencil.svg';
import EnvelopIcon from 'icons/envelop.svg';

const Nav = ({ siteTitle, sections, activeSection }) => {
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

    const renderNavList = () => {
        return sections.map(section => (
            <li className={`nav-list__item${section === activeSection ? ' nav-list__item--active' : ''}`} key={section}>
                {renderIcon(section)}
                <AnchorLink href={`#section-${section}`}>{section}</AnchorLink>
            </li>
        ));
    };

    const renderIcon = section => {
        switch (section) {
            case 'about':
                return <InfoIcon />;
            case 'projects':
                return <ProjectIcon />;
            case 'blog':
                return <PencilIcon />;
            case 'contact':
                return <EnvelopIcon />;
            default:
                break;
        }
    };

    return (
        <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
            <h1 className="nav-logo">
                <AnchorLink href="#___gatsby">{siteTitle}</AnchorLink>
                <CodeIcon />
            </h1>
            <ul className="nav-list">{renderNavList()}</ul>
        </nav>
    );
};

Nav.propTypes = {
    siteTitle: PropTypes.string,
    sections: PropTypes.arrayOf(PropTypes.string),
    activeSection: PropTypes.string
};

Nav.defaultProps = {
    siteTitle: ``,
    sections: [],
    activeSection: ``
};

export default Nav;
