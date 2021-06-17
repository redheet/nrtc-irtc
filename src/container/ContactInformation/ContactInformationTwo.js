import React from 'react';
import {useEffect, useRef} from "react";
import contactDataTwo from '../../data/contactInfo/contactInfoTwo.json';
import ContactInfoItem from '../../components/ContactInfo/ContactInfoItemTwo.jsx';
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import ProjectForm from '../../components/ProjectForm/ProjectForm';
import Parallax from 'parallax-js';

const ContactInformationTwo = () => {
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        })
        
        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div className="section section-padding contact-section">

            <div className="container">
                <div className="row row-cols-lg-2 row-cols-1 align-items-center">
                    <div className="col" data-aos="fade-up">
                        <div className="contact-Information mr-xl-7">
                            <SectionTitleTwo 
                                subTitle="Innovative &amp; cutting-edge technology"
                                title="We use latest technologies that are proven and practical"
                            />

                            {contactDataTwo && contactDataTwo.map((single, key) => {
                                return(
                                    <React.Fragment key={key}>
                                        <ContactInfoItem classOption="ct-info-two" data={single} key={key} />
                                    </React.Fragment>
                                ); 
                            })}
                        </div>
                    </div>
                    <div className="col mt-lg-0 mt-md-10 mt-8" data-aos="fade-up">
                        <div className="contact-form-area box-shadow">
                            <SectionTitle
                                titleOption="section-title text-center mb-7"
                                headingOption="title fz-28"
                                title="Let’s talk about your project"
                                subTitle="We have made it easy for clients to reach us
                                    and get their solutions weaved"
                            />

                            <ProjectForm />

                            <div className="shape shape-1" id="scene" ref={sceneEl}>
                                <span data-depth="1">
                                    <img src={process.env.PUBLIC_URL + "/images/shape-animation/contact-shape.png"} alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape shape-1 scene">
                <span data-depth="1">
                    <img src={process.env.PUBLIC_URL + "/images/shape-animation/newsletter-shape.png"} alt="" />
                </span>
            </div>

        </div>
    )
}

export default ContactInformationTwo
