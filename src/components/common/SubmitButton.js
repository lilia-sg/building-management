export default function SubmitButton({
    text,
    onClick
}){
    return (
        <input 
            type="submit"
            value={text}
            className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={onClick}
        />
    );
}