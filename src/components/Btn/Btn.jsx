import React from 'react';
import PropTypes from 'prop-types';
// import {Link} from "react-router-dom";

const Btn = (props) => {
	return (
		<React.Fragment>
			<a
				href='https://linktr.ee/redhet'
				className='btn btn-light btn-hover-primary'
			>
				{props.name}
			</a>
		</React.Fragment>
	);
};

Btn.propTypes = {
	name: PropTypes.string,
};

export default Btn;
