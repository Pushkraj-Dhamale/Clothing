import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/users';

export const getAllUsers = async () => {
    try {
        const { data } = await axios.get(API_BASE_URL);
        return data;
    } catch (error) {
        console.error('Error fetching all users:', error);
        throw error;
    }
};

export const getUserById = async (id) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/${id}`);
        return data;
    } catch (error) {
        console.error(`Error fetching user with ID ${id}:`, error);
        throw error;
    }
};

export const updateUser = async (id, address, phone) => {
    try {
        const { data } = await axios.put(`${API_BASE_URL}/${id}`, {
            address,
            phone
        });
        return data;
    } catch (error) {
        console.error(`Error updating user with ID ${id}:`, error);
        throw error;
    }
};

export const deleteUser = async (id) => {
    try {
        const { data } = await axios.delete(`${API_BASE_URL}/${id}`);
        return data;
    } catch (error) {
        console.error(`Error deleting user with ID ${id}:`, error);
        throw error;
    }
};

export const addFavorite = async (id, productId) => {
    try {
        const { data } = await axios.post(`${API_BASE_URL}/${id}/favorite/${productId}`);
        return data;
    } catch (error) {
        console.error(`Error adding product ${productId} to favorites for user with ID ${id}:`, error);
        throw error;
    }
};

export const deleteFavorite = async (id, productId) => {
    try {
        const { data } = await axios.delete(`${API_BASE_URL}/${id}/favorite/${productId}`);
        return data;
    } catch (error) {
        console.error(`Error deleting product ${productId} from favorites for user with ID ${id}:`, error);
        throw error;
    }
};
