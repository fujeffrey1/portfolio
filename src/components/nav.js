import React, { Component } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

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
                    <Link to="/">{this.props.siteTitle}</Link>
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
    }
}

Nav.propTypes = {
    siteTitle: PropTypes.string
};

Nav.defaultProps = {
    siteTitle: ``
};

export default Nav;
