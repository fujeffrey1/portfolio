import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import About from '../components/about';
import Projects from '../components/projects';
import Blog from '../components/blog';
import Contact from '../components/contact';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Header />
        <main>
            <VisibilitySensor>
                <About />
            </VisibilitySensor>
            <VisibilitySensor>
                <Projects />
            </VisibilitySensor>
            <VisibilitySensor>
                <Blog />
            </VisibilitySensor>
            <VisibilitySensor>
                <Contact />
            </VisibilitySensor>
        </main>
    </Layout>
);

export default IndexPage;
