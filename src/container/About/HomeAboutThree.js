import React, { useState, useEffect, useRef } from "react";
import {Link} from "react-router-dom";
import Parallax from 'parallax-js';
import ModalVideo from "react-modal-video";

const HomeAboutThree = () => {
    const [isOpen, setOpen] = useState(false)
    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        })
        
        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div className="video-section section section-padding-t90-b100">
            <div className="container">
                <div className="row">

                    <div className="col-lg-8 m-auto" data-aos="fade-up">
                        <div className="about-content-full text-center mb-lg-10 mb-0">
                            <h2 className="title">Creative agency focused on vision, product and people</h2>
                            <p>Marketing has always been about connecting with your audience in
                                the right place and at the right time. Today, that means you need to meet them
                                where they are already spending time: on the internet. A seasoned inbound
                                marketer might say inbound marketing and digital marketing are virtually the
                                same thing, but there are some minor differences.</p>

                            <Link to={process.env.PUBLIC_URL + "/"} className="link"> <mark>Read More</mark> </Link>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="video-popup-area">
                            <div className="skill-video">
                                <img className="image" src={process.env.PUBLIC_URL + "images/video/about-video.jpg"} alt="video popup" />
                                <button className="icon" onClick={()=> setOpen(true)}><i className="fas fa-play"></i></button>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="eS9Qm4AOOBY" onClose={() => setOpen(false)}/>
                            </div>

                            <div className="shape shape-1" id="scene" ref={sceneEl}>
                                <span data-depth="1">
                                    <img src={process.env.PUBLIC_URL + "images/shape-animation/video-shape-1.png"} alt="" />
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HomeAboutThree;
