import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";


const WorkDetailsContainer = ({ data }) => {
    const cate = data.categories.map((value, i) => {
        return(
            <span className="d-inline" key={i}>{value}{i !== data.categories.length - 1 && " , "}</span>
        )
    })
    return (
        <div className="section section-padding">
            <div className="container">
                <div className="row pt--100 pb--80">

                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="work-left work-details" data-aos="fade-up">
                            <div className="portfolio-main-info">
                                <h2 className="title">About the <br/> project</h2>
                                <div className="work-details-list mt-12">

                                    <div className="details-list">
                                        <label>Date</label>
                                        <span>{data.date}</span>
                                    </div>

                                    <div className="details-list">
                                        <label>Client</label>
                                        <span>{data.client}</span>
                                    </div>

                                    <div className="details-list">
                                        <label>Categories</label>
                                        <span>{cate}</span>
                                    </div>

                                    <div className="details-list">
                                        <label>Awards</label>
                                        <span>{data.awards}</span>
                                    </div>

                                </div>
                                <div className="work-share pt--70 pt_md--40 pt_sm--40">
                                    <h6 className="heading heading-h6">SHARE</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-6 offset-lg-1 col-12">
                        <div className="work-left work-details mt-6">
                            <div className="work-main-info">
                                <div className="work-content">
                                    <h6 className="title" data-aos="fade-up">ABOUT THE PROJECT</h6>

                                    <div className="desc mt-8">
                                        {data.body.map((value, i) => {
                                            return(
                                                <div key={i} className="content mb-5" data-aos="fade-up" dangerouslySetInnerHTML={{__html: value}} />
                                            )
                                        })}

                                        <div className="work-btn">
                                            <Link className="btn btn-primary btn-hover-secondary" to={process.env.PUBLIC_URL + data.btn.link}>{data.btn.text}</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="custom-column-thumbnail mt-lg-14 mt-1" data-aos="fade-up">
                            <img className="w-100" src={`${process.env.PUBLIC_URL}/${data.largeImage}`} alt="Agency" />
                        </div>
                    </div>
                </div>

                <div className="row mt-lg-20 mt-12">
                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="digital-marketing" data-aos="fade-up">
                            <h3 className="heading heading-h3">{data.subContent.title}</h3>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-12 offset-lg-1">
                        <div className="digital-marketing mt-lg-0 mt-6" data-aos="fade-up">
                            <div className="inner">
                                <p>{data.subContent.text}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="custom-layout-gallery mt-lg-20 mt-12">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="thumbnail" data-aos="fade-up">
                                <img className="w-100" src={`${process.env.PUBLIC_URL}/${data.gallery.imageOne}`} alt="Agency" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 mt-lg-0 mt-md-0 mt-10">
                            <div className="thumbnail" data-aos="fade-up">
                                <img className="w-100" src={`${process.env.PUBLIC_URL}/${data.gallery.imageTwo}`} alt="Agency" />
                            </div>
                        </div>

                        <div className="col-lg-12 my-6">
                            <div className="thumbnail" data-aos="fade-up">
                                <img className="w-100" src={`${process.env.PUBLIC_URL}/${data.gallery.imageThree}`} alt="Agency" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

WorkDetailsContainer.propTypes = {
    data: PropTypes.object
};

export default WorkDetailsContainer;
