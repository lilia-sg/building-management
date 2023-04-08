import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

import ProfileIcon from "./ProfileIcon";


export default function UserProfileMenu(){
    const [openMenu, setOpenMenu] = useState(false);
    const { onLogout } = useContext(AuthContext);
    const navigate = useNavigate();

    function onProfileClick() {
        setOpenMenu(state => !state);
    }

    function logout() {
        onLogout();
        navigate("/");
    }

    return (
		<div class="relative ml-3">
            <ProfileIcon onProfileClick={onProfileClick}/>
            {openMenu && 
                <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" 
                    role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button"
                    onClick={onProfileClick}>
                    <Link to="/" 
                        class="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-0">
                        Your Profile
                    </Link>
                    <Link to="/" 
                        class="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-1">
                        Settings
                    </Link>
                <Link to="/" onClick={logout}
                    class="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2">
                    Log out
                </Link>
            </div>}
		</div>
    );
}