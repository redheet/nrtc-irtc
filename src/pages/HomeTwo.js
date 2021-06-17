import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import IntroTwo from '../container/IntroSlider/IntroTwo';
import HomeAboutTwo from '../components/About/HomeAboutTwo.jsx';
import Funfact from '../container/Funfact/Funfact';
import ServiceIconBox from '../container/service/ServiceIconBox';
import HomeSkillWithVideo from '../container/HomeSkillWithVideo/HomeSkillWithVideo';
import PortfolioTwo from '../container/Portfolio/PortfolioTwo';
import TestimonialContainer from '../container/Testimonial/TestimonialContainer'
import HomeBlog from '../container/BlogGrid/HomeBlog';
import ContactInformationTwo from '../container/ContactInformation/ContactInformationTwo';
import BrandContainer from '../container/Brand/BrandContainer';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';




const HomeTwo = () => {
    return (
        <React.Fragment>
            <SEO title="Exomac || Home Two" />
            <Header />
            <IntroTwo />
            <HomeAboutTwo />
            <Funfact />
            <ServiceIconBox classOption="bg-color-1" />
            <HomeSkillWithVideo />
            <PortfolioTwo />
            <TestimonialContainer />
            <HomeBlog SectionBgColor="bg-primary-blue" />
            <ContactInformationTwo />
            <BrandContainer classOption="section-padding-bottom" />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default HomeTwo;



