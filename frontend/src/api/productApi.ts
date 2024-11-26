import axios from 'axios';
import { Product } from '../types/Product';

const API_BASE_URL = 'http://backend.sourcefit.local/api';

export const fetchProducts = async (): Promise<Product[]> => {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data.products;
};