export default function DetailsItem({
    displayLabel,
    value,
    bgColor
}) {
	return (
		<div class={`${bgColor} px-4 py-5 sm:grid sm:grid-cols-7 sm:gap-4 sm:px-6`}>
			<dt class="text-sm font-medium text-gray-500">{displayLabel}</dt>
			<dd class="mt-1 text-sm text-gray-900 sm:col-span-5 sm:mt-0">
				{value}
			</dd>
		</div>
	);
}
