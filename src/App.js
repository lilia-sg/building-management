import "./App.css";
import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import { AuthContext } from "./contexts/AuthContext";

function App() {
	const [user, setUser] = useState({});
	const authContext = useContext(AuthContext);

	return (
		<div className="App">
			<AuthContext.Provider value={user}>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/logout" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="*" element={<h1>Page not found!</h1>} />
			</Routes>
			</AuthContext.Provider>
		</div>
	);
}

export default App;
