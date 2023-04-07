import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import RouteGuard from "./components/common/RouteGuard"
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Test from "./components/Test";
import HeaderTest from "./components/Header/HeaderTest";

function App() {
	// TODO: Min width? 
	return (
		<div className="bg-white">
			<AuthContextProvider>
				{/* <HeaderTest /> */}
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/test" element={<Test />} />
					<Route path="*" element={<h1>Page not found!</h1>} />

					<Route element={<RouteGuard />}>
						<Route path="/buildings" element={<Home />} />
                    </Route>

				</Routes>
			</AuthContextProvider>
		</div>
	);
}

export default App;
