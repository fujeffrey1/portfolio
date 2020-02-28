import React from 'react';

import LocationIcon from 'icons/location.svg';
import EducationIcon from 'icons/education.svg';
import OfficeIcon from 'icons/office.svg';

const About = () => (
    <section id="section-about">
        <h2 className="section-heading">About</h2>
        <div className="profile">
            <LocationIcon />
            <EducationIcon />
            <OfficeIcon />
        </div>
        <div className="proficiency"></div>
    </section>
);

export default About;
