import React from 'react';
import './App.css';
import NavBar from './OtherFiles/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from './OtherFiles/Footer';
import Home from './OtherFiles/Home';
import AboutUs from './OtherFiles/AboutUs';
import ContactUs from './OtherFiles/ContactUs';
import LoginReg from './OtherFiles/LoginReg';


function App() {
return (
	<Router>
	<NavBar />
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/home' exact component={Home} />
		<Route path='/aboutus' component={AboutUs} />
		<Route path='/contactus' component={ContactUs} />
		<Route path='/loginreg' component={LoginReg} />
	</Switch>
	<Footer />
	</Router>
);
}

export default App;
