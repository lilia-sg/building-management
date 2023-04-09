import { createContext, useState, useEffect } from "react";

import * as tenantService from "../services/tenantService"


const initalState = {
    tenants: [],
    onDelete: (id) => {},
    onAdd: (tenant) => {},
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

    const onDelete = (tenantId) => {
      setTenants(state => state.filter(t => t._id !== tenantId));
    }

    const onAdd = (tenant) => {
    }

    return (
        <TenantContext.Provider
          value={{
            tenants,
            onDelete,
            onAdd,
          }}
        >
          {children}
        </TenantContext.Provider>
      );
}