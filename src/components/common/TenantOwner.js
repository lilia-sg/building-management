import { useContext } from 'react';
import { useParams, Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

import { TenantContext } from "../../contexts/TenantContext";

export const TenantOwner = ({
    children,
}) => {
    const { id } = useParams();
    const { getTenant } = useContext(TenantContext);
    const { user } = useContext(AuthContext);

    const currentTenant = getTenant(id);

    if ((currentTenant && currentTenant._ownerId !== user._id) || 
        ((currentTenant && currentTenant._id!== user._id))) {
        return <Navigate to={`/tenants/`} replace />
    }

    return children ? children : <Outlet />
};