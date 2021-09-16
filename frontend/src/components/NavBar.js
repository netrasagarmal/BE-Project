import React from 'react';
import {
Nav,
NavLink,
Bars,
} from './NavbarElements.js';

const NavBar = () => {
return (
	<>
	<Nav>
		<Bars />

		
		<NavLink to='/' activeStyle>
			Home
		</NavLink>
		<NavLink to='/signup' activeStyle>
			Signup
		</NavLink>
		<NavLink to='/login' activeStyle>
			Login
		</NavLink>
	</Nav>
	</>
);
};

export default NavBar;
