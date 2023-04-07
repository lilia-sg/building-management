import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as userService from "../../services/userService";
import { useForm } from "../../hooks/useForm";
import { FormKeys } from "../utils/constants";
import { AuthContext } from "../../contexts/AuthContext";


export default function Login() {
	const emptyFormValues = {
		[FormKeys.Email]: "",
		[FormKeys.Password]: "",
	};

	const {
		values: formValues,
		onChangeHandler,
		resetFormValues,
	} = useForm(emptyFormValues);

	const authCtx = useContext(AuthContext);
	const [unsuccessfullLogin, setUnsuccessfulLogin] = useState(false);

    const navigate = useNavigate();

	const login = (e) => {
		e.preventDefault();
		userService
			.login(formValues)
			.then((res) => {
				if (!res.errorMessage) {
					authCtx.onLogin(res);
					setUnsuccessfulLogin(false);
                    navigate("/home");
				} else if (res.errorMessage) {
					resetFormValues();
					setUnsuccessfulLogin(res.errorMessage);
				}
			})
            .catch(err => console.log(err));
	};

	return (
		<section id="login-page">
			<form id="login" onSubmit={(e) => login(e)}>
				<div className="container">
					<h1>Login</h1>
					{unsuccessfullLogin && <h3>{unsuccessfullLogin}</h3>}
					<label htmlFor={FormKeys.Email}>Email:</label>
					<input
						type="email"
						id={FormKeys.Email}
						name={FormKeys.Email}
						placeholder="Email address"
						onChange={onChangeHandler}
						value={formValues[FormKeys.Email]}
					/>

					<label htmlFor={FormKeys.Password}>Password:</label>
					<input
						type="password"
						id={FormKeys.Password}
						name={FormKeys.Password}
						placeholder="Enter password"
						onChange={onChangeHandler}
						value={formValues[FormKeys.Password]}
					/>
					<input type="submit" className="btn submit" value="Login" />
				</div>
			</form>
			<div>
				<p>
					If you don't have profile click <Link to="/register">here</Link>
				</p>
			</div>
		</section>
	);
}
