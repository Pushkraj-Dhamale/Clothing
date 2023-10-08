import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/ratings';

export const getAllRatings = async () => {
    try {
        const { data } = await axios.get(API_BASE_URL);
        return data;
    } catch (error) {
        console.error('Error fetching all ratings:', error);
        throw error;
    }
};

export const getRatingById = async (id) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/${id}`);
        return data;
    } catch (error) {
        console.error(`Error fetching rating with ID ${id}:`, error);
        throw error;
    }
};

export const getRatingByOwnerId = async (ownerId) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/owner/${ownerId}`);
        return data;
    } catch (error) {
        console.error(`Error fetching ratings for owner with ID ${ownerId}:`, error);
        throw error;
    }
};

export const getRatingByProductId = async (productId) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/product/${productId}`);
        return data;
    } catch (error) {
        console.error(`Error fetching ratings for product with ID ${productId}:`, error);
        throw error;
    }
};

export const addRating = async (product, rating, owner) => {
    try {
        const { data } = await axios.post(API_BASE_URL, {
            for: product,
            rating,
            owner
        });
        return data;
    } catch (error) {
        console.error('Error adding a rating:', error);
        throw error;
    }
};

export const updateRating = async (id, product, rating, owner) => {
    try {
        const { data } = await axios.put(`${API_BASE_URL}/${id}`, {
            for: product,
            rating,
            owner
        });
        return data;
    } catch (error) {
        console.error(`Error updating rating with ID ${id}:`, error);
        throw error;
    }
};

export const deleteRating = async (id) => {
    try {
        const { data } = await axios.delete(`${API_BASE_URL}/${id}`);
        return data;
    } catch (error) {
        console.error(`Error deleting rating with ID ${id}:`, error);
        throw error;
    }
};
