import PropTypes from "prop-types";
import React from 'react';
import CounterUpData from '../../data/counter/counterText.json';
import CounterUpItem from '../../components/CounterUp/CounterUpItem.jsx';


const Funfact = ({classOption}) => {
    return (
        <div className={`section section-padding-bottom ${classOption}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mx-auto">
                        <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">

                        {CounterUpData && CounterUpData.map((single, key) => {
                            return(
                                <div key={key} className="col mb-6" data-aos="fade-up">
                                    <CounterUpItem data={single} key={key} />
                                </div>
                            ); 
                        })}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Funfact.propTypes = {
    classOption: PropTypes.string
  };
  Funfact.defaultProps = {
    classOption: "section section-padding-bottom"
};

export default Funfact
