import { Routes, Route } from "react-router-dom";
import { Home, Signup, Login, PlanTrip, Discover, Result, ResultMap, Account } from "./pages";
import { Navbar, ProtectedRoute } from "./components";

function App() {
	return (
		<div>
			<Navbar />
			{/* <div className="max-w-7xl mx-auto"> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/plantrip" element={<PlanTrip />} />
				<Route path="/discover" element={<Discover />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/result" element={<Result />} />
				<Route path="/resultMap" element={<ResultMap />} />
					<Route path="/account" 
						element={
							<ProtectedRoute>
								<Account />
							</ProtectedRoute>
						}
					/>
			</Routes>
			{/* </div> */}

		</div>
	);
}

export default App;