import React from 'react';

import Image from './image';
import ProjectIcon from 'icons/project.svg';

const PROJECTS = {
    huddle: {
        links: {
            github: 'https://github.com/fujeffrey1/huddle',
            demo: 'https://powerful-fjord-22140.herokuapp.com/'
        },
        text: `is an anonymous messaging app where users can communicate privately. This is especially
        important in today's world where corporations are always gathering personal data. Users are able
        to create or join an unlimited amount of rooms with aliases of their choice. They will then be
        able to chat with features like typing indicators, emojis, sharing room links, and timestamps.
        When leaving rooms, messages will be unrecoverable.`,
        uses: ['Svelte', 'Sapper', 'Polka', 'Socket IO']
    },
    sickfits: {
        links: {
            github: 'https://github.com/fujeffrey1/sickfits'
        },
        text: `is an e-commerce site where users are able to buy and sell products after signup. Similar to platforms like Amazon and eBay, it includes many features like authentication, emailing, credit card checkout, image uploading, and more. What makes this project different is the unique interface as well as developer experience. `,
        uses: ['Next.js', 'Apollo', 'Prisma', 'Stripe']
    },
    patter: {
        links: {
            github: 'https://github.com/fujeffrey1/twitter'
        },
        text: `is an anonymous messaging app where users can communicate privately. This is especially
        important in today's world where corporations are always gathering personal data. Users are able
        to create or join an unlimited amount of rooms with aliases of their choice. They will then be
        able to chat with features like typing indicators, emojis, sharing room links, and timestamps.
        When leaving rooms, messages will be unrecoverable.`,
        uses: ['React', 'Redux', 'Node.js', 'MongoDB']
    },
    hemlock: {
        links: {
            github: 'https://github.com/fujeffrey1/hemlock'
        },
        text: `is an anonymous messaging app where users can communicate privately. This is especially
        important in today's world where corporations are always gathering personal data. Users are able
        to create or join an unlimited amount of rooms with aliases of their choice. They will then be
        able to chat with features like typing indicators, emojis, sharing room links, and timestamps.
        When leaving rooms, messages will be unrecoverable.`,
        uses: ['Spring', 'Bootstrap', 'Thymeleaf', 'MySQL']
    }
};

const renderProjects = () => {
    return Object.entries(PROJECTS).map(([project, { links, text, uses }]) => (
        <div className="project" key={project}>
            <a target="_blank" rel="noopener noreferrer" href={links.github}>
                <figure className="project__figure">
                    <Image filename={`${project}.png`} alt={project} className="project__img" />
                </figure>
            </a>
            <div className="project__text">
                <h3>{project}</h3>
                <p>{text}</p>
                <span className="project__links">
                    {Object.entries(links).map(([name, url]) => (
                        <a key={name} target="_blank" rel="noopener noreferrer" href={url} className="btn">
                            {name}
                        </a>
                    ))}
                </span>
            </div>
            <div className="project__uses">
                {uses.map(use => (
                    <span key={use} className="project__bubble">
                        {use}
                    </span>
                ))}
            </div>
        </div>
    ));
};

const Projects = () => (
    <section id="section-projects">
        <h2 className="section-heading">
            <ProjectIcon />
            Projects
        </h2>
        <div className="section-projects__content">{renderProjects()}</div>
    </section>
);

export default Projects;
