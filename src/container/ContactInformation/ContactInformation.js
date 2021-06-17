import PropTypes from "prop-types";
import {useEffect, useRef} from "react";
import contactData from '../../data/contactInfo/contactInfo.json';
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import ContactInfoItem from '../../components/ContactInfo/ContactInfoItem.jsx';
import Parallax from 'parallax-js';


const ContactInformation = ({ classOption }) => {
    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        })
        
        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div className={`section section-padding-t90-b100 ${classOption}`}>
            <div className="container shape-animate">
                <SectionTitle
                    titleOption="section-title text-center mb-lg-12 mb-sm-8 mb-xs-8"
                    title="We are a full-service creative agency"
                    subTitle="Our team of designers, developers and creatives are perfectionists
                    who love what they do and love where they work"
                />

                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
                    {contactData && contactData.map((single, key) => {
                        return(
                            <div key={key} className="col mb-6" data-aos="fade-up">
                                <ContactInfoItem data={single} key={key} />
                            </div>
                        ); 
                    })}
                </div>

                <div className="shape shape-1" id="scene" ref={sceneEl}>
                    <span data-depth="1"><img src={process.env.PUBLIC_URL + "images/shape-animation/video-shape-1.png"} alt="shape" /></span>
                </div>

            </div>
        </div>
    )
}

ContactInformation.propTypes = {
    classOption: PropTypes.string
};
ContactInformation.defaultProps = {
    classOption: "section section-padding-t90-b100"
};

export default ContactInformation
