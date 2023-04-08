import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/buildings';

// export const login = async (loginData) => {
//     const result = await request.post(`${baseUrl}/login`, loginData);   
//     return result;
// };

export const addNewBuilding = async (newBuildingData, token) => {
    try {
        const result = await request.post(`${baseUrl}`, newBuildingData, token);
        return result;
    } catch (err) {
        return { errorMessage: err.message }
    }  
};