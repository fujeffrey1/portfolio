import React from 'react';

import Image from './image';
import ProjectIcon from 'icons/project.svg';

const LINKS = {
    huddle: 'https://github.com/fujeffrey1/huddle',
    sickfits: 'https://github.com/fujeffrey1/sickfits',
    patter: 'https://github.com/fujeffrey1/twitter',
    hemlock: 'https://github.com/fujeffrey1/hemlock'
};

const Projects = () => (
    <section id="section-projects">
        <h2 className="section-heading">
            <ProjectIcon />
            Projects
        </h2>
        <div className="section-projects__content">
            <div className="project">
                <a target="_blank" rel="noopener noreferrer" href={LINKS.huddle}>
                    <figure className="project__figure">
                        <Image filename="huddle.png" alt="huddle" className="project__img" />
                    </figure>
                </a>
                <div className="project__text">
                    <h3>Huddle</h3>
                    <p>
                        is an anonymous messaging app where users can communicate in private. This is especially
                        important in today's world where corporations are always gathering personal data. Users are able
                        to create or join any room with an alias.
                    </p>
                </div>
                <div className="project__uses"></div>
            </div>
            <div className="project">
                <a target="_blank" rel="noopener noreferrer" href={LINKS.sickfits}>
                    <figure className="project__figure">
                        <Image filename="sickfits.png" alt="sickfits" className="project__img" />
                    </figure>
                </a>
                <div className="project__text">
                    <h3>Sickfits</h3>
                    <p></p>
                </div>
                <div className="project__uses"></div>
            </div>
            <div className="project">
                <a target="_blank" rel="noopener noreferrer" href={LINKS.patter}>
                    <figure className="project__figure">
                        <Image filename="patter.png" alt="patter" className="project__img" />
                    </figure>
                </a>
                <div className="project__text">
                    <h3>Patter</h3>
                    <p></p>
                </div>
                <div className="project__uses"></div>
            </div>
            <div className="project">
                <a target="_blank" rel="noopener noreferrer" href={LINKS.hemlock}>
                    <figure className="project__figure">
                        <Image filename="hemlock.png" alt="hemlock" className="project__img" />
                    </figure>
                </a>
                <div className="project__text">
                    <h3>Hemlock</h3>
                    <p></p>
                </div>
                <div className="project__uses"></div>
            </div>
        </div>
    </section>
);

export default Projects;
