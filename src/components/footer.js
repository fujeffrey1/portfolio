import React from 'react';
import PropTypes from 'prop-types';

import GithubIcon from 'icons/github.svg';
import LinkedinIcon from 'icons/linkedin.svg';
import TwitterIcon from 'icons/twitter.svg';

const LINKS = {
    github: 'https://github.com/fujeffrey1',
    linkedin: 'https://www.linkedin.com/in/fujeffrey1/',
    twitter: 'https://twitter.com/fujeffreyx'
};

const Footer = ({ title }) => (
    <footer className="footer">
        <div className="footer__link-list">
            <a className="footer__link-item" target="_blank" rel="noopener noreferrer" href={LINKS.github}>
                <GithubIcon />
            </a>
            <a className="footer__link-item" target="_blank" rel="noopener noreferrer" href={LINKS.linkedin}>
                <LinkedinIcon />
            </a>
            <a className="footer__link-item" target="_blank" rel="noopener noreferrer" href={LINKS.twitter}>
                <TwitterIcon />
            </a>
        </div>
        <div className="footer__text">
            {title} © {new Date().getFullYear()}
        </div>
    </footer>
);

Footer.propTypes = {
    title: PropTypes.string
};

Footer.defaultProps = {
    title: ``
};

export default Footer;
