import React from 'react';
import SEO from '../components/SEO';
import PropTypes from "prop-types";
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import Footer from '../container/Footer/Footer';
import WorkData from "../data/work/workDetails.json";
import WorkDetailsContainer from '../container/Work/WorkDetailsContainer';
import ScrollToTop from '../components/ScrollToTop.jsx';



const WorkDetails = ({match: {params: {id}}}) => {
    const workId = parseInt(id, 10)
    const data = WorkData.filter(work => work.id === workId);
    return (
        <React.Fragment>
            <SEO title="Exomac || Work Details" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bg-two.jpg"
                title={data[0]?.title}
                content="Home"
                contentTwo="Work"
            />
            <WorkDetailsContainer data={data[0]} />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

WorkDetails.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.oneOfType([    
                PropTypes.string,
                PropTypes.number
            ])
        })
    })
}

export default WorkDetails;