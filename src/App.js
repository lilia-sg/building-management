import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Header from "./components/Header/Header";

function App() {
	return (
		<div className="App">
            <Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/logout" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="*" element={<h1>Page not found!</h1>} />
			</Routes>
		</div>
	);
}

export default App;
