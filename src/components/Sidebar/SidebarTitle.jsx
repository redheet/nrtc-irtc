import PropTypes from "prop-types";
import React from 'react'

const SidebarTitle = ({ title, classOption }) => {
    return (
        <React.Fragment>
            <h3 className={`sidebar-widget-title ${classOption}`}>{title}</h3>
        </React.Fragment>
    )
}

SidebarTitle.propTypes = {
    title: PropTypes.string,
    classOption: PropTypes.string
};
SidebarTitle.defaultProps = {
    classOption: "sidebar-widget-title"
};

export default SidebarTitle;
