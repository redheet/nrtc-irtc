import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className='site-main-menu'>
			<ul>
				<li className='has-children'>
					<NavLink to={process.env.PUBLIC_URL + '/'}>
						<span className='menu-text'>Homepage</span>
					</NavLink>
					<span className='menu-toggle'>
						<i className='far fa-angle-down'></i>
					</span>
					<ul className='sub-menu'>
						<li>
							<NavLink to={process.env.PUBLIC_URL + '/home-one'}>
								<span className='menu-text'>Home One</span>
							</NavLink>
						</li>
						<li>
							<NavLink to={process.env.PUBLIC_URL + '/home-two'}>
								<span className='menu-text'>Home Two</span>
							</NavLink>
						</li>
						<li>
							<NavLink to={process.env.PUBLIC_URL + '/home-three'}>
								<span className='menu-text'>Home Three</span>
							</NavLink>
						</li>
					</ul>
				</li>

				<li>
					<NavLink to={process.env.PUBLIC_URL + '/about'}>
						<span className='menu-text'>About Us</span>
					</NavLink>
				</li>
				<li>
					<NavLink to={process.env.PUBLIC_URL + '/service'}>
						<span className='menu-text'>Services</span>
					</NavLink>
				</li>
				<li className='has-children'>
					<NavLink to={process.env.PUBLIC_URL + '/work'}>
						<span className='menu-text'>Work</span>
					</NavLink>
					<span className='menu-toggle'>
						<i className='far fa-angle-down'></i>
					</span>
					<ul className='sub-menu'>
						<li>
							<NavLink to={process.env.PUBLIC_URL + '/work'}>
								<span className='menu-text'>Work</span>
							</NavLink>
						</li>
						<li>
							<NavLink to={process.env.PUBLIC_URL + `/work-details/1`}>
								<span className='menu-text'>Work Details</span>
							</NavLink>
						</li>
					</ul>
				</li>
				<li className='has-children'>
					<NavLink to={process.env.PUBLIC_URL + '/blog-grid'}>
						<span className='menu-text'>Blog</span>
					</NavLink>
					<span className='menu-toggle'>
						<i className='far fa-angle-down'></i>
					</span>
					<ul className='sub-menu'>
						<li>
							<NavLink to={process.env.PUBLIC_URL + '/blog-grid'}>
								<span className='menu-text'>Blog Grid</span>
							</NavLink>
						</li>
						<li>
							<NavLink to={process.env.PUBLIC_URL + '/blog-classic'}>
								<span className='menu-text'>Blog classic</span>
							</NavLink>
						</li>
						<li>
							<NavLink to={process.env.PUBLIC_URL + `/blog-details/1`}>
								<span className='menu-text'>Blog Details</span>
							</NavLink>
						</li>
					</ul>
				</li>
				<li>
					<NavLink to={process.env.PUBLIC_URL + '/contact'}>
						<span className='menu-text'>Contact Us</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
