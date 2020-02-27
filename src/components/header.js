import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import VideoMP4 from 'videos/video.mp4';
import VideoWEBM from 'videos/video.webm';

const Header = () => (
    <header id="header" className="header">
        <div className="header__content">
            <h1 className="header__text u-mb-small">
                Hello, I'm <span className="u-color-primary">Jeffrey Fu</span>.
                <br />
                I'm a full stack web developer.
            </h1>
            <AnchorLink href="#section-about" className="btn">
                Learn More
            </AnchorLink>
        </div>
        <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
                <source src={VideoMP4} type="video/mp4" />
                <source src={VideoWEBM} type="video/webm" />
                Your browser is not supported!
            </video>
        </div>
    </header>
);

export default Header;
