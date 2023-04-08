import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import * as buildingService from "../../services/buildingService"

import { AuthContext } from "../../contexts/AuthContext";
import CancelButton from "../common/CancelButton";
import Input from "../common/Input";
import SubmitButton from "../common/SubmitButton";
import Sidebar from "../Sidebar/Sidebar";

import { FormKeys } from "../utils/constants";

export default function AddBuilding() {
    const emptyFormValues = {
        [FormKeys.BuildingName]:"",
        [FormKeys.Address]:"",
        [FormKeys.City]:"",
        [FormKeys.Country]:"",
        [FormKeys.Floors]:"",
        [FormKeys.AptCount]:"",
        [FormKeys.AddInfo]:"",
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
        buildingService
			.addNewBuilding(formValues, user.accessToken)
			.then((res) => {
				if (!res.errorMessage) {
					setUnsuccessfulCreation(false);
                    navigate("/building");
				} else if (res.errorMessage) {
					setUnsuccessfulCreation(res.errorMessage);
				}
			})
            .catch(err => console.log(err));
    }

    const onCancel = () => {
        resetFormValues();
        navigate("/building");
    }

    return (
        <div className="flex">
        {isAuthenticated && <Sidebar/>}
        <form className="form justify-start max-w-xl mb-10">
			<div className="space-y-10 pt-10 pl-10 mx-auto max-w-xl">
				<div className="border-b border-gray-900/10 pb-10">
					<h2 className="text-base font-semibold leading-7 text-gray-900">
						Building Information
					</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
						Please enter information about the building.
					</p>
                    {/* TODO: Style error message */}
                    {unsuccessfulCreation && <h2>{unsuccessfulCreation}</h2>}
					<div className="mt-5 grid grid-cols-4 gap-x-6 gap-y-4">
						<Input
							type="text"
							name={FormKeys.BuildingName}
							displayLabel="Name"
							size="xl"
                            onChangeHandler={onChangeHandler}
                            value={formValues[FormKeys.BuildingName]}
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
						<Input
							type="number"
							name={FormKeys.Floors}
							displayLabel="Floors"
							size="med"
                            onChangeHandler={onChangeHandler}
                            value={formValues[FormKeys.Floors]}
						/>
						<Input
							type="number"
							name={FormKeys.AptCount}
							displayLabel="Number of apartments"
							size="med"
                            onChangeHandler={onChangeHandler}
                            value={formValues[FormKeys.AptCount]}
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