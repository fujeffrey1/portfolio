import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import CodeIcon from 'icons/code.svg';
import InfoIcon from 'icons/info.svg';
import ProjectIcon from 'icons/project.svg';
import CogsIcon from 'icons/cogs.svg';
import EnvelopIcon from 'icons/envelop.svg';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { scrolled: false };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = event => {
        const { scrollY } = window;
        const { scrolled } = this.state;

        if (scrollY > 0 && !scrolled) {
            this.setState({ scrolled: true });
        } else if (scrollY === 0 && scrolled) {
            this.setState({ scrolled: false });
        }
    };

    render() {
        return (
            <nav className={`nav ${this.state.scrolled && 'nav--scrolled'}`}>
                <h1 className="nav-logo">
                    <CodeIcon />
                    <AnchorLink href="#">{this.props.siteTitle}</AnchorLink>
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
                        <CogsIcon />
                        <AnchorLink href="#section-uses">Uses</AnchorLink>
                    </li>
                    <li className="nav-list__item">
                        <EnvelopIcon />
                        <AnchorLink href="#section-contact">Contact</AnchorLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

Nav.propTypes = {
    siteTitle: PropTypes.string
};

Nav.defaultProps = {
    siteTitle: ``
};

export default Nav;
