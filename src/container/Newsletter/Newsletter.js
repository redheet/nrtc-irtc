import {useEffect, useRef} from "react";
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import NewsletterForm from '../../components/Newsletter/NewsletterForm.jsx';
import Parallax from 'parallax-js';

const Newsletter = () => {
    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        })
        
        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div className="section section-bg-image section-padding-t110-b120 newsletter-section overlay-two" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/newsletter.jpg)`}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="newsletter-content">
                            <SectionTitle
                                titleOption="color-light text-center"
                                title="Let’s find out how to work together"
                                subTitle="Ready to start your project? The contact information collected through
                                this form will only be used to send a response to your inquiry."
                            />
                            <NewsletterForm mailchimpUrl="//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape shape-1" id="scene" ref={sceneEl}>
                <span data-depth="1">
                    <img src={process.env.PUBLIC_URL + "/images/shape-animation/newsletter-shape.png"} alt="" />
                </span>
            </div>
        </div>
    )
}

export default Newsletter
