import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/comments';

export const getAllComments = async () => {
    try {
        const { data } = await axios.get(API_BASE_URL);
        return data;
    } catch (error) {
        console.error('Error fetching all comments:', error);
        throw error;
    }
};

export const getCommentById = async (id) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/${id}`);
        return data;
    } catch (error) {
        console.error(`Error fetching comment with ID ${id}:`, error);
        throw error;
    }
};

export const getCommentByAuthorId = async (id) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/author/${id}`);
        return data;
    } catch (error) {
        console.error(`Error fetching comments by author ID ${id}:`, error);
        throw error;
    }
};

export const getCommentByProductId = async (id) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/product/${id}`);
        return data;
    } catch (error) {
        console.error(`Error fetching comments by product ID ${id}:`, error);
        throw error;
    }
};

export const addComment = async (productId, comment, author) => {
    try {
        const { data } = await axios.post(API_BASE_URL, {
            for: productId,
            comment,
            author
        });
        return data;
    } catch (error) {
        console.error('Error adding a comment:', error);
        throw error;
    }
};

export const updateComment = async (id, productId, comment, author) => {
    try {
        const { data } = await axios.put(`${API_BASE_URL}/${id}`, {
            for: productId,
            comment,
            author
        });
        return data;
    } catch (error) {
        console.error(`Error updating comment with ID ${id}:`, error);
        throw error;
    }
};

export const deleteComment = async (id) => {
    try {
        const { data } = await axios.delete(`${API_BASE_URL}/${id}`);
        return data;
    } catch (error) {
        console.error(`Error deleting comment with ID ${id}:`, error);
        throw error;
    }
};
