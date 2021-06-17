import PropTypes from "prop-types";
import {useState} from "react";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

const CounterUpItem = ({ data }) => {
    const [didViewCountUp, setDidViewCountUp] = useState(false);

    const onVisibilityChange = isVisible => {
        if (isVisible) {
        setDidViewCountUp(true);
        }
    };
    return (
        <div className="funfact">
            <div className="number">
                <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                    >
                    <CountUp end={didViewCountUp ? data.number : 0} />
                </VisibilitySensor>
            </div>
            <h6 className="text">{data.text}</h6>
        </div>
    )
}

CounterUpItem.propTypes = {
    data: PropTypes.object
};

export default CounterUpItem;
