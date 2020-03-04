import React from 'react';

import Image from './image';
import LocationIcon from 'icons/location.svg';
import EducationIcon from 'icons/education.svg';
import OfficeIcon from 'icons/office.svg';

const proficiencies = {
    HTML: '90',
    CSS: '90',
    Javascript: '85',
    React: '80',
    Redux: '80',
    'Node.js': '75',
    'ELK Stack': '70',
    Linux: '65',
    AWS: '60',
    Java: '55'
};

// This relies on first value to be the highest
const HIGHEST_PROFICIENCY = Object.values(proficiencies)[0];

const normalize = num => {
    const numNormalized = num / HIGHEST_PROFICIENCY;
    const percentage = Math.floor(numNormalized * 100) + '%';
    return percentage;
};

const renderProficiencies = () => {
    return Object.entries(proficiencies).map(([category, percentage]) => {
        const width = normalize(percentage);
        return (
            <React.Fragment key={category}>
                <div className="proficiency__category">{category}</div>
                <div className="proficiency__bar">
                    <div className="proficiency__bar--filled" style={{ width }} />
                </div>
                <div className="proficiency__percentage">{percentage + '%'}</div>
            </React.Fragment>
        );
    });
};

const About = () => (
    <section id="section-about">
        <h2 className="section-heading">About</h2>
        <div className="section-about__content">
            <div className="profile">
                <div>
                    <figure className="profile__figure">
                        <Image filename="profile.jpg" alt="Jeffrey Fu" className="profile__img" />
                    </figure>
                    <div className="profile__text">
                        <h3>Who Am I?</h3>
                        <p className="u-mb-small">
                            I'm a full stack web developer who eagerly embraces DevOps culture. I am motivated and
                            always looking to improve both my technical and soft skills.{' '}
                        </p>
                        <p>
                            When I'm not working on a personal project or learning a new technology, I love to travel,
                            weightlift, and play poker.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <LocationIcon />
                        New York, NY
                    </div>
                    <div>
                        <EducationIcon />
                        Stony Brook University <br />
                        BS in Computer Science, Applied Mathematics and Statistics
                    </div>
                    <div>
                        <OfficeIcon />
                        Booz Allen Hamilton <br />
                        Senior Software Engineer
                    </div>
                </div>
            </div>
            <div className="proficiency">{renderProficiencies()}</div>
        </div>
    </section>
);

export default About;
