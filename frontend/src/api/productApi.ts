import axios from 'axios';
import { Product } from '../types/Product';

const API_BASE_URL = 'http://178.128.101.196:8080/api';

export const fetchProducts = async (): Promise<Product[]> => {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data.products;
};