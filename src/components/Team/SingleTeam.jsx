import PropTypes from "prop-types";
import React from 'react';

const SingleTeam = ({ data }) => {
    return (
        <div className="team">
            <div className="thumb">
                <img src={process.env.PUBLIC_URL + data.image} alt="team Images" />
                <div className="overlay"></div>
                <ul className="social-icon text-center">
                    <li className="facebook"><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/" className="link"><i className="fab fa-facebook"></i></a></li>
                    <li className="twitter"><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/" className="link" aria-label="Twitter"><i className="fab fa-twitter"></i></a></li>
                    <li className="instagram"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/" className="link" aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
                </ul>
            </div>
            <div className="team-info text-center">
                <div className="info">
                    <h5>{data.name}</h5>
                    <span>{data.designation}</span>
                </div>
            </div>
        </div>
    )
}

SingleTeam.propTypes = {
    data: PropTypes.object
};

export default SingleTeam;
