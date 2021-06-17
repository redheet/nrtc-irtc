import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import PageBlog from '../container/BlogGrid/PageBlog';
import CallToAction from '../container/CallToAction/CallToAction';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';


const BlogGrid = () => {
    return (
        <React.Fragment>
            <SEO title="Exomac || Blog" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bg-four.jpg"
                title="Find all our latest news, insights, and events"
                content="Home"
                contentTwo="Blog"
            />
            <PageBlog />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default BlogGrid;
