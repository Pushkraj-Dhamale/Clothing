import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/reports';

export const getAllReports = async () => {
    try {
        const { data } = await axios.get(API_BASE_URL);
        return data;
    } catch (error) {
        console.error('Error fetching all reports:', error);
        throw error;
    }
};

export const getReportById = async (id) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/${id}`);
        return data;
    } catch (error) {
        console.error(`Error fetching report with ID ${id}:`, error);
        throw error;
    }
};

export const getReportByUserId = async (id) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/user/${id}`);
        return data;
    } catch (error) {
        console.error(`Error fetching reports for user with ID ${id}:`, error);
        throw error;
    }
};

export const addReport = async (orderId, userId, content) => {
    try {
        const { data } = await axios.post(API_BASE_URL, {
            orderId,
            userId,
            content
        });
        return data;
    } catch (error) {
        console.error('Error adding a report:', error);
        throw error;
    }
};

export const updateReport = async ({ id, orderId, userId, content, status }) => {
    try {
        const { data } = await axios.put(`${API_BASE_URL}/${id}`, {
            orderId,
            userId,
            content,
            status
        });
        return data;
    } catch (error) {
        console.error(`Error updating report with ID ${id}:`, error);
        throw error;
    }
};

export const deleteReport = async (id) => {
    try {
        const { data } = await axios.delete(`${API_BASE_URL}/${id}`);
        return data;
    } catch (error) {
        console.error(`Error deleting report with ID ${id}:`, error);
        throw error;
    }
};
