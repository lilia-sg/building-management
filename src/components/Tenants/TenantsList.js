import { useContext } from "react";
import { TenantContext } from "../../contexts/TenantContext";
import TenantItem from "./TenantItem";

export default function TenantsList(){
   
    const { tenants } = useContext(TenantContext);  

    return (
        <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                        <th scope="col" className="px-6 py-4">Apt #</th>
                        <th scope="col" className="px-6 py-4">First name</th>
                        <th scope="col" className="px-6 py-4">Last name</th>
                        <th scope="col" className="px-6 py-4">Details</th>
                    </tr>
                </thead>
                <tbody>
                    { tenants.map(x => <TenantItem key={x._id} {...x} />)}
                </tbody>
                </table>
    );
}