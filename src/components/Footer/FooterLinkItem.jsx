import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";

const FooterLinkItem = ({data}) => {
    return (
        <div className="footer-widget">
            <h4 className="footer-widget-title">{data.title}</h4>
            <div className="footer-widget-content">
                <ul>
                    {data.list.map((single,key) =>(
                        <li key={key}>
                            <Link to={single.url}>{single.text} {single?.badge && <span className="ft-badge">{single.badge}</span>} </Link>
                        </li>
                    ))}
                    
                </ul>
            </div>
        </div>
    )
}

FooterLinkItem.propTypes = {
    data: PropTypes.object
};

export default FooterLinkItem;
