import React from 'react'
import PropTypes from "prop-types";

const SidebarWidget = (props) => {
    return (
        <div className="sidebar-widget">
            {props.children}
        </div>
    )
}
SidebarWidget.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SidebarWidget;
