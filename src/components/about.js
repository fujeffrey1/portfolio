import React from 'react';

import Image from './image';
import LocationIcon from 'icons/location.svg';
import EducationIcon from 'icons/education.svg';
import OfficeIcon from 'icons/office.svg';
import CertificateIcon from 'icons/certificate.svg';

const links = {
    location: 'https://goo.gl/maps/dNQLYGUnd2N7Yunb7',
    work: 'https://www.boozallen.com/',
    education: 'https://www.stonybrook.edu/',
    certification: 'https://aws.amazon.com/certification/'
};

const proficiencies = {
    HTML: '90',
    CSS: '90',
    Javascript: '85',
    React: '80',
    Redux: '80',
    'Node.js': '75',
    'ELK Stack': '70',
    Linux: '65',
    Docker: '60',
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
        <div className="section-about__content">
            <div className="profile">
                <h2 className="section-heading">About</h2>
                <div>
                    <figure className="profile__figure">
                        <Image filename="profile.jpg" alt="Jeffrey Fu" className="profile__img" />
                    </figure>
                    <div>
                        <h3 className="u-color-primary u-mb-small">Who Am I?</h3>
                        <p className="u-mb-small">
                            I'm a full stack web developer who eagerly embraces DevOps culture. I specialize in all
                            things Javascript but I'm highly motivated and always looking to improve both my technical
                            and soft skills.{' '}
                        </p>
                        <p>
                            When I'm not coding or learning a new technology, I love to travel, weightlift, play
                            handball, and play poker.
                        </p>
                    </div>
                </div>
                <div className="profile__tldr">
                    <a target="_blank" rel="noopener noreferrer" href={links.location}>
                        <span className="profile__subheading">
                            <LocationIcon />
                            <strong>Location</strong>
                        </span>
                        <strong>New York, NY</strong>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={links.work}>
                        <span className="profile__subheading">
                            <OfficeIcon />
                            <strong>Work</strong>
                        </span>
                        <strong>Booz Allen Hamilton</strong>
                        <p>Senior Software Engineer</p>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={links.education}>
                        <span className="profile__subheading">
                            <EducationIcon />
                            <strong>Education</strong>
                        </span>
                        <strong>Stony Brook University</strong>
                        <p>BS in Computer Science & Mathematics</p>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={links.certification}>
                        <span className="profile__subheading">
                            <CertificateIcon />
                            <strong>Certifications</strong>
                        </span>
                        <strong>Amazon Web Services</strong>
                        <p>
                            Solutions Architect Associate
                            <br />
                            SysOps Administrator Associate
                        </p>
                    </a>
                </div>
            </div>
            <div className="proficiency">{renderProficiencies()}</div>
        </div>
    </section>
);

export default About;
