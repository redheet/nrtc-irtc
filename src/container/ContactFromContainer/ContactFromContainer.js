import React from 'react';
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import ContactFrom from '../../components/ContactFrom/ContactFrom.jsx';

const ContactFromContainer = () => {
    return (
        <div className="contact-form-section section section-padding-t90-b100 bg-primary-blue">
            <div className="container">
                <div className="row">
                    <div className="offset-lg-2 col-lg-8">
                        <SectionTitle
                            headingOption="fz-32"
                            title="Let’s talk about your project"
                            subTitle="We have made it easy for clients to reach us and get their solutions weaved"
                        />
                        <ContactFrom />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactFromContainer
