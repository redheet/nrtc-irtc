import React from 'react';

const SidebarSearch = () => {
    return (
        <div className="sidebar-widget-content">
            <div className="sidebar-widget-search">
                <form>
                    <input type="text" placeholder="Search..." />
                    <button><i className="fas fa-search"></i></button>
                </form>
            </div>
        </div>
    )
}

export default SidebarSearch;
