import * as request from './requester';

const baseUrl = 'http://localhost:3030/users';

export const login = async (loginData) => {
    const result = await request.post(`${baseUrl}/login`, loginData);   
    return result;
};