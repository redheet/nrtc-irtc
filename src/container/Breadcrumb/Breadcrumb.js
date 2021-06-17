import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";

const Breadcrumb = ({title, content, contentTwo, image}) => {
    const publicUrl = process.env.PUBLIC_URL;
    return (
        <div className="page-title-section section section-padding-top overlay-two" style={{backgroundImage: `url(${publicUrl}/${image})`}}>
            <div className="page-title">
                <div className="container">
                    <h1 className="title">{title}</h1>
                </div>
            </div>
            <div className="page-breadcrumb position-static">
                <div className="container">
                    <ul className="breadcrumb justify-content-center">
                        <li><Link to={process.env.PUBLIC_URL + "/"}>{content}</Link></li>
                        <li className="current">{contentTwo}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

Breadcrumb.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    contentTwo: PropTypes.string,
    image: PropTypes.string
};

export default Breadcrumb;
