import { useContext } from "react";
import LinkButtonSmall from "../common/LinkButtonSmall";
import { AuthContext } from "../../contexts/AuthContext";

export default function TenantItem({
    _id,
    aptNum,
    firstName,
    lastName,
    _ownerId
}) {

    const { user } = useContext(AuthContext);
    const isOwner = (_ownerId === user._id || _id === user._id);    

    return (
        <tr
            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
            <td className="whitespace-nowrap px-6 py-4 font-medium">{aptNum}</td>
            <td className="whitespace-nowrap px-6 py-4">{firstName}</td>
            <td className="whitespace-nowrap px-6 py-4">{lastName}</td>
            <td className="whitespace-nowrap px-6 py-4">
                {isOwner && <LinkButtonSmall text="Details" link={`/tenants/${_id}`}/>}
            </td>
    </tr>
    );
}