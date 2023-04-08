import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as userService from "../../services/userService";
import { useForm } from "../../hooks/useForm";
import { FormKeys } from "../utils/constants";
import { AuthContext } from "../../contexts/AuthContext";
import SubmitButton from "../common/SubmitButton";
import Input from "../common/Input";


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
            <form 
                className="form mx-auto max-w-xl mb-10"
                onSubmit={(e) => login(e)}>
                <div className="space-y-10 pt-10 mx-auto max-w-xl">
                    <div className="border-b border-gray-900/10 pb-10">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Log into Building Manager App
                        </h2>
                        
                        <div className="space-y-5 pt-2 mx-auto max-w-xl">
                            {/* TODO: Style link */}
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                If you don't have profile click <Link to="/register">here</Link>
                            </p>
                        </div>
                        {/* TODO: Style error message */}
                        {unsuccessfullLogin && <h3>{unsuccessfullLogin}</h3>}
                        <div className="mt-5 grid grid-cols-4 gap-x-6 gap-y-4">
                            <Input 
                                type="email" 
                                name={FormKeys.Email} 
                                displayLabel="Email" 
                                size="lg" 
                                onChangeHandler={onChangeHandler}
                                value={formValues[FormKeys.Email]}
                                />
                            <Input 
                                type="password" 
                                name={FormKeys.Password} 
                                displayLabel="Password" 
                                size="lg" 
                                value={formValues[FormKeys.Password]}
                                onChangeHandler={onChangeHandler}
                                />
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <SubmitButton text="Login" onClick={(e) => login(e)}/>
                </div>
		    </form>
		</section>
	);
}
