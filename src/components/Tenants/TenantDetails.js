import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as tenantService from "../../services/tenantService"

import LinkButton from "../common/LinkButton";
import Sidebar from "../Sidebar/Sidebar";
import DetailsItem from "../common/DetailsItem";
import SubmitButton from "../common/SubmitButton";
import { TenantContext } from "../../contexts/TenantContext";
import { AuthContext } from "../../contexts/AuthContext";

export default function TenantDetails() {
    const { id } = useParams();
    const [tenant, setTenant] = useState({});
    const { onDelete } = useContext(TenantContext);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        tenantService.getById(id)
            .then(res => setTenant(res));
    }, []);

    const onDeleteHandler = (tenantId) => {
        tenantService.deleteTenant(tenantId, user.accessToken);
        onDelete(tenantId);
        navigate("/tenants");
    }

    const canEdit = (tenant._ownerId === user._id || tenant._id === user._id);    
    const isAdmin = (tenant._ownerId === user._id);    
    
    return (
    <div className="flex">
        <Sidebar/>
            <div class="basis-2/3 h-auto bg-white shadow sm:rounded-lg mx-10 my-10">
                <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-base font-semibold leading-6 text-gray-900">Tenant Profile</h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">TODO: Some text here</p>
                </div>
                <div class="border-t border-gray-200">
                <dl>
                    <DetailsItem value={`${tenant.aptNum}`} 
                        displayLabel="Apartment #" 
                        bgColor="bg-gray-50"
                    />
                    <DetailsItem value={`${tenant.firstName} ${tenant.midName} ${tenant.lastName}`} 
                        displayLabel="Full name" 
                        bgColor="bg-white"
                    />
                    <DetailsItem value={`${tenant.email}`} 
                        displayLabel="Email" 
                        bgColor="bg-gray-50"
                    />
                    <DetailsItem value={`${tenant.phone}`} 
                        displayLabel="Phone #" 
                        bgColor="bg-white"
                    />
                    <DetailsItem value={`${tenant.occupants}`} 
                        displayLabel="# of occupants" 
                        bgColor="bg-gray-50"
                    />
                </dl>
                </div>
                <div className="mt-6 flex items-center justify-left gap-x-6 ml-10">
                    <LinkButton text="Back" link="/tenants"/>
                    {canEdit && <LinkButton text="Edit" link="edit"/>}
                    {isAdmin && <SubmitButton text="Delete" onClick={() => onDeleteHandler(tenant._id)}/>}
			</div>
        </div>
  </div>
  );
}