import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/tenants';

export const getAll = async () => {
    try {
        const result = await request.get(`${baseUrl}`);
        return result;
    } catch (err) {
        return { errorMessage: err.message }
    }  
};

export const addnewTenant = async (newTenantData, token) => {
    try {
        const result = await request.post(`${baseUrl}`, newTenantData, token);
        return result;
    } catch (err) {
        return { errorMessage: err.message }
    }  
};

export const getById = async (tenantId) => {
    try {
        const result = await request.get(`${baseUrl}/${tenantId}`);
        return result;
    } catch (err) {
        return { errorMessage: err.message }
    }  
};