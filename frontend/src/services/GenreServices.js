import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/genres';

export const getAllGenres = async () => {
    try {
        const { data } = await axios.get(API_BASE_URL);
        return data;
    } catch (error) {
        console.error('Error fetching all genres:', error);
        throw error;
    }
};

export const getGenreById = async (id) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/${id}`);
        return data;
    } catch (error) {
        console.error(`Error fetching genre with ID ${id}:`, error);
        throw error;
    }
};

export const addGenre = async (name, status) => {
    try {
        const { data } = await axios.post(API_BASE_URL, {
            name,
            status
        });
        return data;
    } catch (error) {
        console.error('Error adding a genre:', error);
        throw error;
    }
};

export const updateGenre = async (id, name, status) => {
    try {
        const { data } = await axios.put(`${API_BASE_URL}/${id}`, {
            name,
            status
        });
        return data;
    } catch (error) {
        console.error(`Error updating genre with ID ${id}:`, error);
        throw error;
    }
};

export const deleteGenre = async (id) => {
    try {
        const { data } = await axios.delete(`${API_BASE_URL}/${id}`);
        return data;
    } catch (error) {
        console.error(`Error deleting genre with ID ${id}:`, error);
        throw error;
    }
};
