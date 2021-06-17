import React, { useState } from "react";
import {Link} from "react-router-dom";
import ModalVideo from "react-modal-video";



const HomeSkillWithVideo = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className="video-section section section-padding">

            <div className="container">

                <div className="row align-items-center">

                    <div className="col-xl-5 col-lg-6 col-12" data-aos="fade-up">
                        <div className="skill-with-video-content">
                            <div className="section-title-two mb-8">
                                <span className="sub-title">Development that converts and delivers</span>
                                <h3 className="title">We offer the tools and skills that your company deserves</h3>
                            </div>

                            <ul className="agency-list">
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text">Select &amp; customize courses to your preferences</div>
                                </li>
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text">Change the tutor and make arrangements</div>
                                </li>
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text">Participate in events to join others</div>
                                </li>
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text">Get the desired certificate delivered at house</div>
                                </li>
                            </ul>
                            <Link to={process.env.PUBLIC_URL + "/"} className="btn btn-primary btn-hover-secondary"> Get started for free</Link>
                        </div>
                    </div>

                    <div className="offset-xl-1 col-xl-6 col-lg-6 col-12">
                        <div className="video-popup-area">
                            <div className="skill-video">
                                <img className="image" src={process.env.PUBLIC_URL + "/images/video/skill-video.jpg"} alt="video popup" />
                                <button className="icon" onClick={()=> setOpen(true)}><i className="fas fa-play"></i></button>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="eS9Qm4AOOBY" onClose={() => setOpen(false)}/>
                            </div>

                            <div className="shape shape-1 scene">
                                <span data-depth="1">
                                    <img src={process.env.PUBLIC_URL + "/images/shape-animation/video-shape-1.png"} alt="" />
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}



export default HomeSkillWithVideo;
