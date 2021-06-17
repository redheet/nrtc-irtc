import React from 'react';
import {Link} from "react-router-dom";

const SidebarBanner = () => {
    return (
        <div className="sidebar-widget-content">
            <div className="sidebar-widget-banner overlay-two" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/breadcrumb-bg.jpg)`}} >
                <h3 className="title">Subscribe to our newsletter</h3>
                <p>All the latest marketing news, including updates on brand campaigns, and the most interesting insights</p>
                <Link to={process.env.PUBLIC_URL + "/"}>Subscribe Now</Link>
            </div>
        </div>
    )
}

export default SidebarBanner;
