import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/buildings';

// export const login = async (loginData) => {
//     const result = await request.post(`${baseUrl}/login`, loginData);   
//     return result;
// };

export const addNewBuilding= async (newBuildingData) => {
    try {
        const result = await request.post(`${baseUrl}`, newBuildingData);
        return result;
    } catch (err) {
        return { errorMessage: err.message }
    }  
};