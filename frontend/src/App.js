import React from 'react';
import { Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {Home, Signup, Login} from "./pages"
import './App.css';

function App() {
return (
	<>
	<NavBar />
		<Routes>
			<Route path="/" element={<Home />}/>
			<Route path="/signup" element={<Signup />}/>
			<Route path="/login" element={<Login />}/>
		</Routes>
	<Footer />
	</>
);
}

export default App;
