import PropTypes from "prop-types";
import React from 'react';
import ReactVivus from 'react-vivus';

const ContactInfoItem = ({data}) => {
    return (
        <div className="contact-info">
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
                <span className="info-text" dangerouslySetInnerHTML={{__html: data.info}}/>
            </div>
        </div>
    )
}

ContactInfoItem.propTypes = {
    data: PropTypes.object
};

export default ContactInfoItem;
