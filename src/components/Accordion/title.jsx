import { useContext } from "react";
import PropTypes from "prop-types";
import { AccordionContext } from "./context";

const AccordionTitle = ({
    children,
    id
}) => {
    const { toggleActive, activeId, setIsInit } = useContext(AccordionContext);

    const clickHandler = () => {
        if (!toggleActive || !id || !setIsInit) return;
        setIsInit(false);
        toggleActive(id);
    };
    const isActive = id === activeId ? true : false;

    return (
        <div className={`accordion-title ${isActive ? "active" : ""}`}
            type="button"
            onClick={clickHandler}
        >
            <span className="icon closed">
                <i className="icon-add far fa-angle-down"></i>
            </span>
            <span className="icon opened">
                <i className="icon-remove far fa-angle-up"></i>
            </span>
            <span className="title">{children}</span>
        </div>
    );
};

AccordionTitle.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default AccordionTitle;
