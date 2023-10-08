import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/products';

export const getAllProducts = async () => {
    try {
        const { data } = await axios.get(API_BASE_URL);
        return data;
    } catch (error) {
        console.error('Error fetching all products:', error);
        throw error;
    }
};

export const getProductById = async (id) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/${id}`);
        return data;
    } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
        throw error;
    }
};

export const getProduct = async () => {
    try {
        const { data } = await axios.get('http://localhost:4000/affiliate/');
        return data;
    } catch (error) {
        console.error(`Error fetching product with ID :`, error);
        throw error;
    }
};

export const getProductByPrice = async (lowest, uppest) => {
    try {
        const { data } = await axios.post(`${API_BASE_URL}/query/price`, {
            lowest,
            uppest
        });
        return data;
    } catch (error) {
        console.error('Error fetching products by price:', error);
        throw error;
    }
};

export const getProductByCategoryId = async (id) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/category/${id}`);
        return data;
    } catch (error) {
        console.error(`Error fetching products by category ID ${id}:`, error);
        throw error;
    }
};

export const getProductByColor = async (color, lowest, uppest) => {
    try {
        const { data } = await axios.post(`${API_BASE_URL}/color/${color}`, {
            lowest,
            uppest
        });
        return data;
    } catch (error) {
        console.error(`Error fetching products by color ${color}:`, error);
        throw error;
    }
};

export const getProductByGender = async (gender, lowest, uppest) => {
    try {
        const { data } = await axios.post(`${API_BASE_URL}/gender/${gender}`, {
            lowest,
            uppest
        });
        return data;
    } catch (error) {
        console.error(`Error fetching products by gender ${gender}:`, error);
        throw error;
    }
};

export const getProductByStatus = async (status) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/status/${status}`);
        return data;
    } catch (error) {
        console.error(`Error fetching products by status ${status}:`, error);
        throw error;
    }
};

export const getProductBySearch = async (search) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/search/${search}`);
        return data;
    } catch (error) {
        console.error(`Error fetching products by search query ${search}:`, error);
        throw error;
    }
};

export const getProductsByQueries = async (lowest, uppest, gender, color) => {
    try {
        const { data } = await axios.post(`${API_BASE_URL}/query/full`, {
            lowest,
            uppest,
            gender,
            color
        });
        return data;
    } catch (error) {
        console.error('Error fetching products by queries:', error);
        throw error;
    }
};

export const addProduct = async (imageUrl, name, color, sizes, description, category, gender, price) => {
    try {
        const { data } = await axios.post(API_BASE_URL, {
            imageUrl,
            name,
            color,
            sizes,
            description,
            category,
            gender,
            price
        });
        return data;
    } catch (error) {
        console.error('Error adding a product:', error);
        throw error;
    }
};

export const updateProduct = async (id, name, description, price) => {
    try {
        const { data } = await axios.put(`${API_BASE_URL}/${id}`, {
            name,
            description,
            price
        });
        return data;
    } catch (error) {
        console.error(`Error updating product with ID ${id}:`, error);
        throw error;
    }
};

export const deleteProduct = async (id) => {
    try {
        const { data } = await axios.delete(`${API_BASE_URL}/${id}`);
        return data;
    } catch (error) {
        console.error(`Error deleting product with ID ${id}:`, error);
        throw error;
    }
};
