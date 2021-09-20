import { Routes, Route} from "react-router-dom";
import { Home, Signup, Login} from "./pages";
import { Navbar} from "./components";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/signup" element={<Signup />}/>
				<Route path="/login" element={<Login />}/>
			</Routes>

		</div>
	);
}

export default App;
