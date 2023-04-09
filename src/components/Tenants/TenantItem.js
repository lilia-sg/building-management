import LinkButton from "../common/LinkButton";
import LinkButtonSmall from "../common/LinkButtonSmall";

export default function TenantItem({
    _id,
    aptNum,
    firstName,
    lastName
}) {

    return (
        <tr
            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
            <td className="whitespace-nowrap px-6 py-4 font-medium">{aptNum}</td>
            <td className="whitespace-nowrap px-6 py-4">{firstName}</td>
            <td className="whitespace-nowrap px-6 py-4">{lastName}</td>
            <td className="whitespace-nowrap px-6 py-4">
                <LinkButtonSmall text="Details" link={`/tenants/${_id}`}/>
            </td>
    </tr>
    );
}