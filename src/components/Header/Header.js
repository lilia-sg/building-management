import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="App-header">
			<h1>Welcome to the Residential Building Management application</h1>
			<ul className="nav">
				<li><Link to="/home">Home</Link></li>
				<li><Link to="/login">Login</Link></li>
				<li><Link to="/logout">Logout</Link></li>
				<li><Link to="/register">Registration</Link></li>
			</ul>
		</header>
	);
}
