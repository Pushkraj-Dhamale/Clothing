import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000';

export const getAllImages = async () => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/images`);
        return data;
    } catch (error) {
        console.error('Error fetching all images:', error);
        throw error;
    }
};

export const getImageById = async (id) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/images/${id}`);
        return data;
    } catch (error) {
        console.error(`Error fetching image with ID ${id}:`, error);
        throw error;
    }
};

export const addImage = async (url) => {
    try {
        const { data } = await axios.post(`${API_BASE_URL}/images`, {
            url
        });
        return data;
    } catch (error) {
        console.error('Error adding an image:', error);
        throw error;
    }
};

export const deleteImage = async (id) => {
    try {
        const { data } = await axios.delete(`${API_BASE_URL}/images/${id}`);
        return data;
    } catch (error) {
        console.error(`Error deleting image with ID ${id}:`, error);
        throw error;
    }
};

export const getAllMiniImages = async () => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/minis`);
        return data;
    } catch (error) {
        console.error('Error fetching all mini images:', error);
        throw error;
    }
};

export const getMiniImageById = async (id) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/minis/${id}`);
        return data;
    } catch (error) {
        console.error(`Error fetching mini image with ID ${id}:`, error);
        throw error;
    }
};

export const addMiniImage = async (url) => {
    try {
        const { data } = await axios.post(`${API_BASE_URL}/minis`, {
            url
        });
        return data;
    } catch (error) {
        console.error('Error adding a mini image:', error);
        throw error;
    }
};

export const deleteMiniImage = async (id) => {
    try {
        const { data } = await axios.delete(`${API_BASE_URL}/minis/${id}`);
        return data;
    } catch (error) {
        console.error(`Error deleting mini image with ID ${id}:`, error);
        throw error;
    }
};

// CLOUDINARY

export const uploadImageToCloudinary = async (image) => {
    try {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
        data.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
        const result = await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`, {
            method: 'POST',
            body: data
        })
            .then(res => res.json());
        return result;
    } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
        throw error;
    }
};
