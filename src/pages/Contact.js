import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import ContactInformation from '../container/ContactInformation/ContactInformation';
import GoogleMap from '../container/Map/GoogleMap';
import ContactFromContainer from '../container/ContactFromContainer/ContactFromContainer';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';

const Contact = () => {
    return (
        <React.Fragment>
            <SEO title="Exomac || Contact" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bg-five.jpg"
                title="We are an agency located in New York"
                content="Home"
                contentTwo="Contact Us"
            />
            <ContactInformation />
            <GoogleMap />
            <ContactFromContainer />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default Contact;

