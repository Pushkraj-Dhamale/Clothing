import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/orders';

export const getAllOrders = async () => {
    try {
        const { data } = await axios.get(API_BASE_URL);
        return data;
    } catch (error) {
        console.error('Error fetching all orders:', error);
        throw error;
    }
};

export const getOrderById = async (id) => {
    try {
        const { data } = await axios.get(`API_BASE_URL/${id}`);
        console.log(id)
        return data;
    } catch (error) {
        console.error(`Error fetching order with ID ${id}:`, error);
        throw error;
    }
};

export const getOrdersByStatus = async (status) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/status/${status}`);
        return data;
    } catch (error) {
        console.error(`Error fetching orders by status ${status}:`, error);
        throw error;
    }
};

export const getOrdersByUserId = async (id) => {
    // console.log(id)
    try {
        const decodedId = decodeURIComponent(id); 
        const { data } = await axios.get(`${API_BASE_URL}/user/${decodedId}`);
        
        return data;
    } catch (error) {
        console.error(`Error fetching orders for user with ID ${id}:`, error);
        throw error;
    }
};

export const addOrder = async (products, buyer, address) => {
    try {
        const { data } = await axios.post(API_BASE_URL, {
            products,
            buyer,
            address
        });
        return data;
    } catch (error) {
        console.error('Error adding an order:', error);
        throw error;
    }
};

export const updateOrderStatus = async (id, status, prepare, onWay, delivered, cancel) => {
    try {
        const { data } = await axios.put(`${API_BASE_URL}/${id}`, {
            status,
            prepare,
            onWay,
            delivered,
            cancel
        });
        return data;
    } catch (error) {
        console.error(`Error updating order with ID ${id}:`, error);
        throw error;
    }
};

export const deleteOrder = async (id) => {
    try {
        const { data } = await axios.delete(`${API_BASE_URL}/${id}`);
        return data;
    } catch (error) {
        console.error(`Error deleting order with ID ${id}:`, error);
        throw error;
    }
};
