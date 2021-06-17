import React from 'react';
import SEO from '../components/SEO';
import Header from '../partials/header/Header';
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import AboutFour from '../container/About/AboutFour';
import Video from '../container/Video/Video';
import AboutFive from '../container/About/AboutFive';
import TestimonialContainer from '../container/Testimonial/TestimonialContainer';
import CallToActionTwo from '../container/CallToAction/CallToActionTwo';
import Footer from '../container/Footer/Footer';
import Faq from '../container/Faq/Faq';
import ScrollToTop from '../components/ScrollToTop.jsx';

const AboutUs = () => {
	return (
		<React.Fragment>
			<SEO title='NRTC & IRTC – About' />
			<Header />
			<Breadcrumb
				image='images/bg/breadcrumb-bg.jpg'
				title='Follow more to know us'
				content='Home'
				contentTwo='About Us'
			/>
			<AboutFour />
			<Video />
			<AboutFive />
			<TestimonialContainer classOption='bg-primary-blue' />
			<CallToActionTwo />
			<Faq />
			<Footer />
			<ScrollToTop />
		</React.Fragment>
	);
};

export default AboutUs;
