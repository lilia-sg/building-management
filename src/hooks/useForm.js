import { useState } from "react";

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    // TODO: Validate values

    const onChangeHandler = (e) => {
        setValues(prev => ({...prev, [e.target.name]:e.target.value }))
    };

    const resetFormValues = () => {
        setValues(initialValues);
    }

    const changeValues = (newValues) => {
        setValues(newValues);
    };

    return {
        values, 
        onChangeHandler,
        resetFormValues,
        changeValues
    }
}