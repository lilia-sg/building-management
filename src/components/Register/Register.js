import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import * as userService from "../../services/userService";

import CancelButton from "../common/CancelButton";
import Input from "../common/Input";
import SubmitButton from "../common/SubmitButton";

import { FormKeys } from "../utils/constants";

export default function Register() {
	const emptyFormValues = {
		[FormKeys.Email]: "",
		[FormKeys.Password]: "",
        [FormKeys.ConfirmPassword]:"",
        [FormKeys.FirstName]:"",
        [FormKeys.MiddleName]:"",
        [FormKeys.LastName]:"",
        [FormKeys.Phone]:"",
        [FormKeys.Address]:"",
        [FormKeys.City]:"",
        [FormKeys.Country]:"",
	};

	const {
		values: formValues,
		onChangeHandler,
		resetFormValues,
	} = useForm(emptyFormValues);

    const [unsuccessfullRegistration, setUnsuccessfulRegistration] = useState(false);
    
    const navigate = useNavigate();

    const onFormSubmit = (e) => {
        e.preventDefault();
        
        const { confirmPassword, ...newUserData } = formValues;
        // TODO: Match the two password
        // if (confirmPassword !== registerData.password) {
        //     return;
        // }
        userService
			.addNewUser(newUserData)
			.then((res) => {
				if (!res.errorMessage) {
					setUnsuccessfulRegistration(false);
                    navigate("/login");
				} else if (res.errorMessage) {
					setUnsuccessfulRegistration(res.errorMessage);
				}
			})
            .catch(err => console.log(err));
    }

	return (
		// TODO: Add text that you are registering as a building manager
		<form className="form mx-auto max-w-xl mb-10">
			<div className="space-y-10 pt-10 mx-auto max-w-xl">
				<div className="border-b border-gray-900/10 pb-10">
                    {/* TODO: Style error message */}
                    {unsuccessfullRegistration && <h2>{unsuccessfullRegistration}</h2>}
					<h2 className="text-base font-semibold leading-7 text-gray-900">
						Profile
					</h2>
					<p className="mt-1 text-sm leading-6 text-gray-600">
						Some intro text here.
					</p>
					<div className="mt-5 grid grid-cols-4 gap-x-6 gap-y-4">
						<Input
							type="text"
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
							size="med"
                            onChangeHandler={onChangeHandler}
                            value={formValues[FormKeys.Password]}
						/>
						<Input
							type="password"
							name={FormKeys.ConfirmPassword} 
							displayLabel="Confirm password"
							size="med"
                            onChangeHandler={onChangeHandler}
                            value={formValues[FormKeys.ConfirmPassword]}
						/>
					</div>
				</div>

				<div className="border-b border-gray-900/10 pb-10">
					<h2 className="text-base font-semibold leading-7 text-gray-900">
						Personal Information
					</h2>
					<div className="mt-5 grid grid-cols-4 gap-x-6 gap-y-4">
						<Input
							type="text"
							name={FormKeys.FirstName}
							displayLabel="First Name"
							size="med"
                            onChangeHandler={onChangeHandler}
                            value={formValues[FormKeys.FirstName]}
						/>
						<Input
							type="text"
							name={FormKeys.MiddleName}
							displayLabel="Middle Name"
							size="med"
                            onChangeHandler={onChangeHandler}
                            value={formValues[FormKeys.MiddleName]}
						/>
						<Input
							type="text"
							name={FormKeys.LastName}
							displayLabel="Last Name"
							size="lg"
                            onChangeHandler={onChangeHandler}
                            value={formValues[FormKeys.LastName]}
						/>
						<Input
							type="text"
							name={FormKeys.Phone}
							displayLabel="Phone nr"
							size="lg"
                            onChangeHandler={onChangeHandler}
                            value={formValues[FormKeys.Phone]}
						/>
                        <Input
							type="text"
							name={FormKeys.Address}
							displayLabel="Address"
							size="xl"
                            onChangeHandler={onChangeHandler}
                            value={formValues[FormKeys.Address]}
						/>
						<Input
							type="text"
							name={FormKeys.City}
							displayLabel="City"
							size="med"
                            onChangeHandler={onChangeHandler}
                            value={formValues[FormKeys.City]}
						/>
                        {/* TODO: Add countries as drop-down menu */}
						<Input
							type="text"
							name={FormKeys.Country}
							displayLabel="Country"
							size="med"
                            onChangeHandler={onChangeHandler}
                            value={formValues[FormKeys.Country]}
						/>
					</div>
				</div>
			</div>

			<div className="mt-6 flex items-center justify-end gap-x-6">
				<CancelButton text="Cancel" onClick={resetFormValues}/>
				<SubmitButton text="Save" onClick={onFormSubmit}/>
			</div>
		</form>
	);
}
