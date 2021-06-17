import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const WorkItem = ({ portfolio }) => {
    return (
        <div className="single-portfolio">
            <div className="thumbnail">
                <img className="img-fluid" src={portfolio.homeImage} alt="Portfolio-01"/>
            </div>
            <div className="content">
                <h5 className="title"><Link to={process.env.PUBLIC_URL + `/work-details/${portfolio.id}`}>{`${portfolio.title.slice(0, 22)}...`} <img src={process.env.PUBLIC_URL + "/images/icons/arrow-up-right.svg"} alt=""/></Link></h5>
            </div>
        </div>
    )
}

WorkItem.propTypes = {
    portfolio: PropTypes.object
};

export default WorkItem;
