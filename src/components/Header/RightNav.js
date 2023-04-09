import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import NotificationIcon from "./NotificationIcon";
import UserProfileMenu from "./UserProfileMenu";

export default function RightNav() {
    const { isAuthenticated } =	useContext(AuthContext);
    return (
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <NotificationIcon/>
            {isAuthenticated && <UserProfileMenu/>}
    </div>
    );
}