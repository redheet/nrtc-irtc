import PropTypes from "prop-types";
import React from 'react';


const SectionTitleTwo = ({subTitle , title, classOption}) => {
    return (
        <div className={`section-title-two ${classOption}`} data-aos="fade-up">
            <span className="sub-title">{subTitle}</span>
            <h3 className="title" dangerouslySetInnerHTML={{__html: title}} />
        </div>
    )
}

SectionTitleTwo.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    classOption: PropTypes.string
};
SectionTitleTwo.defaultProps = {
    classOption: "section-title-two"
};

export default SectionTitleTwo;
