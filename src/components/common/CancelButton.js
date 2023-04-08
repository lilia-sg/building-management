export default function CancelButton({
    text,
    onClick
}){
    return (
        <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={onClick}
        >
            {text}
        </button>
    );
}