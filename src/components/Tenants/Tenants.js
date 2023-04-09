import { useContext, useState, useEffect } from "react";
import * as tenantService from "../../services/tenantService"

import { AuthContext } from "../../contexts/AuthContext";
import LinkButton from "../common/LinkButton";

import Sidebar from "../Sidebar/Sidebar";
import TenantsList from "./TenantsList";
import { TenantContext, TenantContextProvider } from "../../contexts/TenantContext";

export default function Tenants(){
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <TenantContextProvider>
            <div className="flex">
                {isAuthenticated && <Sidebar/>}
                <div class="flex flex-col ml-10">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 mb-6">
                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                {<TenantsList/>}
                            </div>
                        </div>
                    </div>
                    <LinkButton text="Add new tenant" link="add"/>
                </div>
            </div>
        </TenantContextProvider>
    );
}