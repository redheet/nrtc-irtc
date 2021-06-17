import React from 'react';
import {slugify} from "../../utils";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const BlogDetails = ({ data }) => {
    const cate = data.categories.map((value, i) => {
        return (
            <Link to={process.env.PUBLIC_URL + `/category/${slugify(value)}`} key={i}>{value}{i !== data.categories.length - 1 && ","}</Link>
        )
        
    });
    return (
        <div className="blog-3 blog-details col" data-aos="fade-up">
            <div className="thumbnail">
                <img className="w-100" src={`${process.env.PUBLIC_URL}/${data.largeImage}`} alt="Blog Image" />
            </div>
            <div className="info">
                <h3 className="title">{data.title}</h3>
                {data.body.map((value, i) => {
                    return(
                        <div key={i} className="desc" dangerouslySetInnerHTML={{__html: value}} />
                    )
                })}
                <ul className="meta mb-0 mt-12">
                    <li><i className="fal fa-pencil-alt"></i>{data.author}</li>
                    <li><i className="far fa-calendar"></i>{data.date}</li>
                    <li><i className="fas fa-tags"></i>{cate}</li>
                    <li><i className="fas fa-comments"></i>4 Comments</li>
                    <li className="media"><Link to={process.env.PUBLIC_URL + "/"}><i className="fas fa-share-alt"></i>Share this post</Link>
                        <div className="list">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                            <a href="https://www.tumblr.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-tumblr-square"></i></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

BlogDetails.propTypes = {
    data: PropTypes.object
};

export default BlogDetails
