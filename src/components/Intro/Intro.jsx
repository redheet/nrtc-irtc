import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Intro = ({ data }) => {
	return (
		<div
			className='intro-section overlay section'
			style={{
				backgroundImage: `url(${
					process.env.PUBLIC_URL + data.backgroundImage
				})`,
			}}
		>
			<div className='container'>
				<div className='row row-cols-lg-1 row-cols-1'>
					<div className='col align-self-center'>
						<div className='intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8'>
							<h2 className='title'>{data.title}</h2>
							<div className='desc'>
								<p>{data.desc}</p>
							</div>
							<a
								href='https://linktr.ee/redhet'
								className='btn btn-primary btn-hover-secondary'
							>
								Get Started
							</a>
							<Link
								to={process.env.PUBLIC_URL + '/about'}
								className='btn btn-outline-white btn-hover-primary'
							>
								{' '}
								Learn More{' '}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Intro.propTypes = {
	data: PropTypes.object,
};

export default Intro;
