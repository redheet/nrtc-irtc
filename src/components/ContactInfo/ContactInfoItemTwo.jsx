import PropTypes from 'prop-types';
import React from 'react';
import ReactVivus from 'react-vivus';

const ContactInfoItemTwo = ({ data, classOption }) => {
    return (
        <div className={`contact-info ${classOption}`} >
            <div className="icon">
                <ReactVivus
                    id={`contactsvg-${data.id}`}
                    option={{
                        file: data.icon,
                        animTimingFunction: 'EASE',
                            type: 'oneByOne',
                            delay: 80
                    }}
                />
            </div>
            <div className="info">
                <h4 className="title">{data.title}</h4>
                <span className="info-text" dangerouslySetInnerHTML={{__html: data.info}} />
            </div>
        </div>
    )
}

ContactInfoItemTwo.propTypes = {
    data: PropTypes.object,
    classOption: PropTypes.string
};

ContactInfoItemTwo.defaultProps = {
    classOption: "contact-info ct-info-two"
};

export default ContactInfoItemTwo;
