import React from 'react';
import PropTypes from "prop-types";

const SidebarWrap = (props) => {
    return (
        <div className="sidebar-widget-wrapper">
            {props.children}
        </div>
    )
}

SidebarWrap.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SidebarWrap;
