import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Logout() {
	const authCtx = useContext(AuthContext);
    const navigate = useNavigate();

    function logout() {
        authCtx.onLogout();
        navigate("/");
    }

	return (
		<>
			<h1>This is the logout page!</h1>
			<p>Click below to logout!</p>
			<button onClick={logout}>Logout</button>
		</>
	);
}
