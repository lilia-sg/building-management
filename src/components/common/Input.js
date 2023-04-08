export default function Input({
    type,
    name,
    displayLabel,
    value,
    size,
    onChangeHandler
}){

    let spanSize;
    if (size === "sm") {
        spanSize = "col-span-1"
    } else if (size === "med") {
        spanSize = "col-span-2";
    } else if (size === "lg") {
        spanSize = "col-span-3";
    } else if (size === "xl") {
        spanSize = "col-span-4";
    }
    

    return (
        <div className={spanSize}>
            <label
                htmlFor={name}
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                {displayLabel}
            </label>
            <div className="mt-2">
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChangeHandler}
                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    autoComplete="off"
                />
            </div>
        </div>

    );
}