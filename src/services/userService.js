import * as request from './requester';

const baseUrl = 'http://localhost:3030/users';

export const login = async (loginData) => {
    const result = await request.post(`${baseUrl}/login`, loginData);   
    return result;
};

export const addNewUser = async (newUserData) => {
    try {
        const result = await request.post(`${baseUrl}/register`, newUserData);
        return result;
    } catch (err) {
       if (err.status === 409) {
        return { errorMessage: "User with the same email address already exists" };
       } else {
        return { errorMessage: err.message }
        }
    }  
};