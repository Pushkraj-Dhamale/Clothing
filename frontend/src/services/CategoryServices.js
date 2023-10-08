import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000';

export const getAllCategories = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/categories`);
        return response.data;
    } catch (error) {
        console.error('Error fetching all categories:', error);
        throw error;
    }
};

export const getCategoryByGenre = async (genre) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/categories/genre/${genre}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching category by genre:', error);
        throw error;
    }
};

export const getCategoryById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/categories/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching category by ID:', error);
        throw error;
    }
};

export const addCategory = async (name, genre, status) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/categories`, {
            name,
            genre,
            status
        });
        return response.data;
    } catch (error) {
        console.error('Error adding a category:', error);
        throw error;
    }
};

export const updateCategory = async (id, name, genre, status) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/categories/${id}`, {
            name,
            genre,
            status
        });
        return response.data;
    } catch (error) {
        console.error('Error updating a category:', error);
        throw error;
    }
};

export const deleteCategory = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/categories/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting a category:', error);
        throw error;
    }
};
