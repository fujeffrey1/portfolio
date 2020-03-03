import React from 'react';

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
                Hi !
                <figure>
                    <img src="#" alt="Jeffrey Fu" className="profile__img" />
                    <figcaption className="profile__caption">Who am I?</figcaption>
                </figure>
                <div>
                    <LocationIcon />
                    New York, NY
                </div>
                <div>
                    <EducationIcon />
                    Stony Brook University
                </div>
                <div>
                    <OfficeIcon />
                    Booz Allen Hamilton
                </div>
            </div>
            <div className="proficiency">{renderProficiencies()}</div>
        </div>
    </section>
);

export default About;
