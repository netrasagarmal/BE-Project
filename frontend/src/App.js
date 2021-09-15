import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import LoginReg from './components/LoginReg';


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
