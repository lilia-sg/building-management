import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Logo from "./Logo";
import MainNav from "./MainNav";
import NotificationIcon from "./NotificationIcon";
import RightNav from "./RightNav";
import UserProfileMenu from "./UserProfileMenu";

export default function Header() {

	const { isAuthenticated } =	useContext(AuthContext);

	return (
		<nav class="bg-gray-700">
			<div class="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
				<div class="relative flex h-16 items-center justify-between">
					<MainNav/>
					<RightNav/>
				</div>
			</div>
	</nav>
	);
}
