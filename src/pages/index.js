import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import About from '../components/about';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Header />
        <main>
            <About />
        </main>
    </Layout>
);

export default IndexPage;
