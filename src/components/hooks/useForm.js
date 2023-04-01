import { useState } from "react";

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const onChangeHandler = (e) => {
        setValues(prev => ({...prev, [e.target.name]:e.target.value }))
    };

    return {
        values, 
        onChangeHandler
    }
}