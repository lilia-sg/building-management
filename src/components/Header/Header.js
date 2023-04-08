import MainNav from "./MainNav";
import RightNav from "./RightNav";

export default function Header() {

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
