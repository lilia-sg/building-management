import SubmitButton from "../common/SubmitButton";

export default function BuildingCard({
    id,
    name,
    city,
    address
}) {
	return (
		<div className="inline-block v-auto rounded-lg bg-white text-center shadow-lg dark:bg-neutral-700 m-10">
			<div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
				Sofia
			</div>
			<div className="p-6">
				<h5 className="mb-4 mt-2 ml-10 mr-10 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 ">
					Building name
				</h5>
				<p className="mb-10 text-base text-neutral-600 dark:text-neutral-200">
					Address stuff 12
				</p>
                
			</div>
			<div className="border-t-2 border-neutral-100 px-6 py-4 dark:border-neutral-600 dark:text-neutral-50">
                <SubmitButton text="View details"/>
			</div>
		</div>
	);
}
