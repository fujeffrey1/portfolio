import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import About from '../components/about';
import Projects from '../components/projects';
import Uses from '../components/uses';
import Contact from '../components/contact';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Header />
        <main>
            <About />
            <Projects />
            <Uses />
            <Contact />
        </main>
    </Layout>
);

export default IndexPage;
