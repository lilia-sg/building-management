import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function MainNav() {
    //TODO: Set state of current page
    const { isAuthenticated } =	useContext(AuthContext);
    
    return (
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex shrink-0 items-center">
                <img class="block h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Company Logo"/>
            </div>
            <div class="sm:ml-6 sm:block">
                <div class="flex space-x-4">
                    <Link to="/" 
                        class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
                            Home
                    </Link>

                    {isAuthenticated && <Link to="/test" 
                        class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                            Calendar
                    </Link>}

                    {!isAuthenticated && <Link to="/login" 
                        class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                            Login
                    </Link>}

                    {!isAuthenticated && <Link to="/register" 
                        class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                            Register
                    </Link>}
                </div>
            </div>
		</div>
    );
}