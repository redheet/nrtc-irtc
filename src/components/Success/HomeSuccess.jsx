import {useState, useEffect, useRef} from "react";
import { Progress } from 'reactstrap';
import SectionTitleTwo from '../SectionTitles/SectionTitleTwo';
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';



const HomeSuccess = () => {
    const [scale] = useState(1.04);
    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        })
        
        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div className="section section-padding-top success-section-padding-bottom-180">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6" data-aos="fade-up">
                        <div className="about-image-area right-0 skill-image-area">
                            <div className="about-image js-tilt">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/skill/skill-1.jpg"} alt=""/>
                                </Tilt>
                            </div>
                            <div className="about-image js-tilt">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/skill/skill-2.jpg"} alt=""/>
                                </Tilt>
                            </div>
                            <div className="shape shape-1" id="scene" ref={sceneEl}>
                                <span data-depth="1"><img src={process.env.PUBLIC_URL + "images/shape-animation/video-shape-1.png"} alt="" /></span>
                            </div>
                        </div>
                    </div>

                    <div className="offset-lg-1 col-lg-5" data-aos="fade-up" data-aos-delay="300">
                        <div className="success-content mt-lg-0 mt-md-50 mt-sm-50 mt-40">
                            <SectionTitleTwo 
                                subTitle="Your success is our success"
                                title="Web design, marketing &amp; SEO solutions that get results"
                            />


                            <div className="progress-bar--one">
                                <div className="progress-charts">
                                    <h6 className="heading ">UX Design</h6>
                                    <div className="single-progress">
                                        <Progress data-aos="fade-right" data-aos-delay="100" data-aos-duration="450" barClassName="gradient-1"  value="81" >
                                            <span className="percent-label">81%</span>
                                        </Progress>
                                    </div>
                                </div>

                                <div className="progress-charts ">
                                    <h6 className="heading ">Marketing</h6>
                                    <div className="single-progress">
                                        <Progress data-aos="fade-right" data-aos-delay="200" data-aos-duration="450" barClassName="gradient-2"  value="72" >
                                            <span className="percent-label">72%</span>
                                        </Progress>
                                    </div>
                                </div>

                                <div className="progress-charts ">
                                    <h6 className="heading ">Web Design</h6>
                                    <div className="single-progress">
                                        <Progress data-aos="fade-right" data-aos-delay="300" data-aos-duration="450" barClassName="gradient-3"  value="81" >
                                            <span className="percent-label">81%</span>
                                        </Progress>
                                    </div>
                                </div>

                                <div className="progress-charts ">
                                    <h6 className="heading ">Development</h6>
                                    <div className="single-progress">
                                        <Progress data-aos="fade-right" data-aos-delay="400" data-aos-duration="450" barClassName="gradient-4" value="81" >
                                            <span className="percent-label">81%</span>
                                        </Progress>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}



export default HomeSuccess;
