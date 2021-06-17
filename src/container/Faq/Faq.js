import {useState, useEffect, useRef} from "react";
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import AccordionWrap from '../../components/Accordion/AccordionWrap.jsx';
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';

const Faq = () => {
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
        <div className="faq-section section section-padding-top bg-primary-blue">
            <div className="container">
                <div className="row row-cols-lg-2 row-cols-1 mb-n6">
                    <div className="col mb-6" data-aos="fade-up">
                        <div className="faq-content">
                            <SectionTitleTwo 
                                subTitle="Frequently asked questions"
                                title="You’ve got questions and <br/> we’ve got answers"
                            />

                            <AccordionWrap />
                            
                        </div>
                    </div>

                    <div className="col mb-6 pl-xl-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-image-area faq-image-area">
                            <div className="about-image right-n50">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "/images/faq/faq-2.jpg"} alt="" />
                                </Tilt>
                            </div>
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "/images/faq/faq-1.jpg"} alt="" />
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

export default Faq;
