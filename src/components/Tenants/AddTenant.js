import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import * as tenantService from "../../services/tenantService"

import { AuthContext } from "../../contexts/AuthContext";
import CancelButton from "../common/CancelButton";
import Input from "../common/Input";
import SubmitButton from "../common/SubmitButton";
import Sidebar from "../Sidebar/Sidebar";

import { FormKeys } from "../utils/constants";

export default function AddTenant() {
    const emptyFormValues = {
		[FormKeys.Email]: "",
        [FormKeys.FirstName]:"",
        [FormKeys.MiddleName]:"",
        [FormKeys.LastName]:"",
        [FormKeys.Phone]:"",
        [FormKeys.AptNum]:"",
        [FormKeys.Floor]:"",
        [FormKeys.AddInfo]:"",
        [FormKeys.OccupantsCount]:"",
    };

    const {
		values: formValues,
		onChangeHandler,
		resetFormValues,
	} = useForm(emptyFormValues);

    const [unsuccessfulCreation, setUnsuccessfulCreation] = useState(false);

    const { isAuthenticated, user } = useContext(AuthContext);

    const navigate = useNavigate();

    const onFormSubmit = (e) => {
        e.preventDefault();        
        tenantService
			.addnewTenant(formValues, user.accessToken)
			.then((res) => {
				if (!res.errorMessage) {
					setUnsuccessfulCreation(false);
                    navigate("/tenants");
				} else if (res.errorMessage) {
					setUnsuccessfulCreation(res.errorMessage);
				}
			})
            .catch(err => console.log(err));
    }

    const onCancel = () => {
        resetFormValues();
        navigate("/tenants");
    }

    return (
        <div className="flex">
        {isAuthenticated && <Sidebar/>}
        <form className="form justify-start max-w-xl mb-10">
			<div className="space-y-10 pt-10 pl-10 mx-auto max-w-xl">
				<div className="border-b border-gray-900/10 pb-10">
					<h2 className="text-base font-semibold leading-7 text-gray-900">
						Tenant Information
					</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
						Please enter information about the tenant
					</p>
                    {/* TODO: Style error message */}
                    {unsuccessfulCreation && <h2>{unsuccessfulCreation}</h2>}
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
							size="xl"
                            onChangeHandler={onChangeHandler}
                            value={formValues[FormKeys.LastName]}
						/>
						<Input
							type="text"
							name={FormKeys.Phone}
							displayLabel="Phone nr"
							size="xl"
                            onChangeHandler={onChangeHandler}
                            value={formValues[FormKeys.Phone]}
						/>
						<Input
							type="text"
							name={FormKeys.Email}
							displayLabel="Email"
							size="xl"
                            onChangeHandler={onChangeHandler}
                            value={formValues[FormKeys.Email]}
						/>
						<Input
							type="number"
							name={FormKeys.Floor}
							displayLabel="Floor"
							size="med"
                            onChangeHandler={onChangeHandler}
                            value={formValues[FormKeys.Floor]}
						/>
						<Input
							type="number"
							name={FormKeys.AptNum}
							displayLabel="Apartment"
							size="med"
                            onChangeHandler={onChangeHandler}
                            value={formValues[FormKeys.AptNum]}
						/>
						<Input
							type="number"
							name={FormKeys.OccupantsCount}
							displayLabel="Number of occupants"
							size="med"
                            onChangeHandler={onChangeHandler}
                            value={formValues[FormKeys.OccupantsCount]}
						/>
						<Input
							type="text"
							name={FormKeys.AddInfo}
							displayLabel="Additional info"
							size="xl"
                            onChangeHandler={onChangeHandler}
                            value={formValues[FormKeys.AddInfo]}
						/>

					</div>
				</div>
			</div>

			<div className="mt-6 flex items-center justify-end gap-x-6">
				<CancelButton text="Cancel" onClick={onCancel}/>
				<CancelButton text="Reset" onClick={resetFormValues}/>
				<SubmitButton text="Save" onClick={onFormSubmit}/>
			</div>
		</form>
        </div>
    );
}