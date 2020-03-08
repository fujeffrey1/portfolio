import React from 'react';
import PropTypes from 'prop-types';

import GithubIcon from 'icons/github.svg';
import LinkedinIcon from 'icons/linkedin.svg';
import TwitterIcon from 'icons/twitter.svg';

const Footer = ({ title }) => (
    <footer className="footer">
        <div className="footer__links">
            <GithubIcon />
            <LinkedinIcon />
            <TwitterIcon />
        </div>
        {title} © {new Date().getFullYear()}
    </footer>
);

Footer.propTypes = {
    title: PropTypes.string
};

Footer.defaultProps = {
    title: ``
};

export default Footer;
