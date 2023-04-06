import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Header() {
const { isAuthenticated } =	useContext(AuthContext);
	
	return (
		<header className="App-header">
			<h1>Welcome to the Residential Building Management application</h1>
			<ul className="nav">
				<li><Link to="/home">Home</Link></li>
				{isAuthenticated && <li><Link to="/buildings">Buildings</Link></li>}
				{!isAuthenticated &&<li><Link to="/login">Login</Link></li>}
				{isAuthenticated && <li><Link to="/logout">Logout</Link></li>}
				{!isAuthenticated && <li><Link to="/register">Registration</Link></li>}
			</ul>
		</header>
	);
}
