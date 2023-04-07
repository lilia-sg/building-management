import { Link } from "react-router-dom";

export default function Logo() {
    return (
    <div className="flex items-center">
		<button
		  className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
		  type="button"
		  data-bs-target="#navbarSupportedContentY"
		  aria-controls="navbarSupportedContentY"
		  aria-expanded="false"
		>
		</button>

		<Link className="navbar-brand text-blue-600" to="/">
          <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Logo" />
		</Link>
	  </div>);
}