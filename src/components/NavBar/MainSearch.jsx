import PropTypes from 'prop-types';
import React from 'react';


const MainSearch = ({show, onClose}) => {
    return (
        <div className={`main-search-active ${show ? "inside": ""}`}>
            <div className="sidebar-search-icon">
                <button className="search-close" onClick={onClose}><i className="pe-7s-close"></i></button>
            </div>
            <div className="sidebar-search-input">
                <form>
                    <div className="form-search">
                        <input id="search" className="input-text" placeholder="" type="search"/>
                        <button>
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </form>
                <p className="form-description">Hit enter to search</p>
            </div>
        </div>
    )
}

MainSearch.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func
}

export default MainSearch;
