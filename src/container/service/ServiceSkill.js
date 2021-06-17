import {useState, useEffect, useRef} from "react";
import { Progress } from 'reactstrap';
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';


const ServiceSkill = () => {
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
        <div className="section section-padding-top skill-section-padding-bottom bg-primary-blue" data-bg-color="#f8faff">
            <div className="container">
                <div className="row">

                    <div className="col-xl-5 col-lg-6 order-lg-1 order-2" data-aos="fade-up">

                        <div className="progressbar-area mt-lg-0 mt-md-50 mt-sm-50 mt-40">

                            <SectionTitleTwo 
                                subTitle="Brand-first creative services"
                                title="Bringing unique and engaging experiences to your brand"
                            />

                            <div className="progress-bar--one">
                                <div className="progress-charts">
                                    <h6 className="heading ">UX Design</h6>
                                    <div className="single-progress">
                                        <Progress
                                        barClassName="gradient-1"  
                                        value="81" >
                                            <span className="percent-label">81%</span>
                                        </Progress>
                                    </div>
                                </div>

                                <div className="progress-charts ">
                                    <h6 className="heading ">Marketing</h6>
                                    <div className="single-progress">
                                        <Progress barClassName="gradient-2"  value="72" >
                                            <span className="percent-label">72%</span>
                                        </Progress>
                                    </div>
                                </div>

                                <div className="progress-charts ">
                                    <h6 className="heading ">Web Design</h6>
                                    <div className="single-progress">
                                        <Progress barClassName="gradient-3"  value="81" >
                                            <span className="percent-label">81%</span>
                                        </Progress>
                                    </div>
                                </div>

                                <div className="progress-charts ">
                                    <h6 className="heading ">Development</h6>
                                    <div className="single-progress">
                                        <Progress barClassName="gradient-4" value="81" >
                                            <span className="percent-label">81%</span>
                                        </Progress>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="offset-xl-1 col-xl-6 col-lg-6 order-lg-2 order-1" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-image-area right-0 skill-image-area">
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "/images/skill/skill-1.jpg"} alt="" />
                                </Tilt>
                            </div>
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "/images/skill/skill-2.jpg"} alt="" />
                                </Tilt>
                            </div>
                            <div className="shape shape-1" id="scene" ref={sceneEl}>
                                <span data-depth="1"><img src={process.env.PUBLIC_URL + "/images/shape-animation/video-shape-1.png"} alt="" /></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ServiceSkill;
