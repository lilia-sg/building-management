import { createContext, useState, useEffect } from "react";

import * as tenantService from "../services/tenantService"


const initalState = {
    tenants: [],
    onDelete: (id) => {},
    onAdd: (tenant) => {},
    onEdit: (tenant) => {},
}
export const TenantContext = createContext(initalState);

export const TenantContextProvider = ({
  children
}) => {
    const [tenants, setTenants] = useState(initalState.tenants);

    useEffect(() => {
      tenantService.getAll()
          .then(result => setTenants(result))
    }, []);

    const onAdd = (tenant) => {
      //TODO: Add new tenant to the state
    }

    const onDelete = (tenantId) => {
      setTenants(state => state.filter(t => t._id !== tenantId));
    }

    const onEdit = (udpatedTenant) => {
      setTenants(state => state.map(x => x._id === udpatedTenant._id ? udpatedTenant : x))
  };

    return (
        <TenantContext.Provider
          value={{
            tenants,
            onDelete,
            onAdd,
            onEdit
          }}
        >
          {children}
        </TenantContext.Provider>
      );
}