import React from 'react';

import Image from './image';
import ProjectIcon from 'icons/project.svg';

const Projects = () => (
    <section id="section-projects">
        <h2 className="section-heading">
            <ProjectIcon />
            Projects
        </h2>
        <div className="section-projects__content">
            <div className="project">
                <figure className="project__figure">
                    <Image filename="huddle.png" alt="huddle" className="project__img" />
                </figure>
                <h3>Huddle</h3>
            </div>
            <div className="project">
                <figure className="project__figure">
                    <Image filename="sickfits.png" alt="sickfits" className="project__img" />
                </figure>
                <h3>Sickfits</h3>
            </div>
            <div className="project">
                <figure className="project__figure">
                    <Image filename="patter.png" alt="patter" className="project__img" />
                </figure>
                <h3>Patter</h3>
            </div>
            <div className="project">
                <figure className="project__figure">
                    <Image filename="hemlock.png" alt="hemlock" className="project__img" />
                </figure>
                <h3>Hemlock</h3>
            </div>
        </div>
    </section>
);

export default Projects;
