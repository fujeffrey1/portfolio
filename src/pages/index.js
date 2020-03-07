import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import About from '../components/about';
import Projects from '../components/projects';
import Blog from '../components/blog';
import Contact from '../components/contact';

const sections = {
    about: About,
    projects: Projects,
    blog: Blog,
    contact: Contact
};

const IndexPage = () => {
    const [activeSection, setActiveSection] = useState('');

    // TODO: Fine-tune this
    const onChange = (section, isVisible) => {
        console.log('section', section);
        console.log('isVisible', isVisible);
        if (isVisible) {
            setActiveSection(section);
        } else {
            setActiveSection('');
        }
    };

    const renderSections = () => {
        return Object.entries(sections).map(([section, Section]) => (
            <VisibilitySensor key={section} onChange={isVisible => onChange(section, isVisible)}>
                <Section />
            </VisibilitySensor>
        ));
    };

    return (
        <Layout sections={Object.keys(sections)} activeSection={activeSection}>
            <SEO title="Home" />
            <Header />
            <main>{renderSections()}</main>
        </Layout>
    );
};

export default IndexPage;
