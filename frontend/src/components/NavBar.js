import React from 'react';
import { Container } from './FooterStyles.js';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements.js';

const NavBar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/home' activeStyle>
			Home
		</NavLink>
		<NavLink to='/aboutus' activeStyle>
			AboutUs
		</NavLink>
		<NavLink to='/contactus' activeStyle>
			ContactUs
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/loginreg'>SignIn/Up</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default NavBar;
