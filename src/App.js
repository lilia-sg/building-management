import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import Logout from "./components/Logout";
import RouteGuard from "./components/common/RouteGuard"

function App() {
	return (
		<div className="App">
			<AuthContextProvider>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="*" element={<h1>Page not found!</h1>} />

					<Route element={<RouteGuard />}>
						<Route path="/buildings" element={<Home />} />
						<Route path="/logout" element={<Logout />} />
                    </Route>

				</Routes>
			</AuthContextProvider>
		</div>
	);
}

export default App;
