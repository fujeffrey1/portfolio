import React from 'react';

import VideoMP4 from '../videos/video.mp4';
import VideoWEBM from '../videos/video.webm';

const Header = () => (
    <header className="header">
        <h1 className="header__text">
            Hello, I'm <span className="color-primary">Jeffrey Fu</span>
            <br />
            I'm a full stack web developer.
        </h1>
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
