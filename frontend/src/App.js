import { Routes, Route } from "react-router-dom";
import { Home, Signup, Login, PlanTrip, Detail, AboutUs, Result, Account, ResultMap, Profile } from "./pages";
import { Navbar, PrivateRoute } from "./components";

function App() {
	return (
		<div>
			<Navbar />
			{/* <div className="max-w-7xl mx-auto"> */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/plantrip" element={<PlanTrip />} />
					<Route path='/discover' element={<Detail />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
					<Route path="/result" element={<Result />} />
					<Route path="/resultMap" element={<ResultMap />} />
					<Route path='/aboutus' element={<AboutUs />} />
					{/* <PrivateRoute path="/account" element={<Account />} /> */}
					<PrivateRoute path="/account" element={<Account />} />

					<PrivateRoute path="/profile" element={<Profile />} />
				</Routes>
			{/* </div> */}

		</div>
	);
}

export default App;