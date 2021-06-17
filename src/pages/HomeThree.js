import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import IntroThree from '../container/IntroSlider/IntroThree';
import HomeAboutThree from '../container/About/HomeAboutThree';
import Funfact from '../container/Funfact/Funfact';
import ServiceIconBox from '../container/service/ServiceIconBox';
import Faq from '../container/Faq/Faq';
import PortfolioTwo from '../container/Portfolio/PortfolioTwo';
import Team from '../container/Team/Team';
import TestimonialContainer from '../container/Testimonial/TestimonialContainer';
import CallToAction from '../container/CallToAction/CallToAction';
import HomeBlog from '../container/BlogGrid/HomeBlog';
import ContactInformation from '../container/ContactInformation/ContactInformation';
import BrandContainer from '../container/Brand/BrandContainer';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';






const HomeThree = () => {
    return (
        <React.Fragment>
            <SEO title="Exomac || Home Three" />
            <Header />
            <IntroThree />
            <HomeAboutThree />
            <Funfact classOption="section-padding bg-primary-blue"/>
            <ServiceIconBox />
            <Faq />
            <PortfolioTwo />
            <Team />
            <TestimonialContainer />
            <CallToAction />
            <HomeBlog />
            <ContactInformation classOption="bg-primary-blue" />
            <BrandContainer classOption="section-padding" />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default HomeThree;



