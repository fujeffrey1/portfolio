import React from 'react';

import GithubIcon from 'icons/github.svg';
import LinkedinIcon from 'icons/linkedin.svg';
import TwitterIcon from 'icons/twitter.svg';

const Footer = ({ title }) => (
    <footer className="footer">
        <GithubIcon />
        <LinkedinIcon />
        <TwitterIcon />
        {title} © {new Date().getFullYear()}
    </footer>
);

export default Footer;
