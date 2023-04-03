import "./App.css";
import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import { AuthContextProvider } from "./contexts/AuthContext";
import Logout from "./components/Logout";

function App() {
	return (
		<div className="App">
			<AuthContextProvider>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/logout" element={<Logout />} />
					<Route path="/register" element={<Register />} />
					<Route path="*" element={<h1>Page not found!</h1>} />
				</Routes>
			</AuthContextProvider>
		</div>
	);
}

export default App;
