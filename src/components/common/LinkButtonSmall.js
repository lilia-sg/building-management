import { Link } from "react-router-dom";

export default function LinkButtonSmall({
    text,
    link
}){
    return (
        <Link to={link}>
            <button
            type="button"
            className="rounded-md bg-indigo-400 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            {text}
        </button>
    </Link>
    );
}