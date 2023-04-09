import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/buildings';

export const addNewBuilding = async (newBuildingData, token) => {
    try {
        const result = await request.post(`${baseUrl}`, newBuildingData, token);
        return result;
    } catch (err) {
        return { errorMessage: err.message }
    }  
};