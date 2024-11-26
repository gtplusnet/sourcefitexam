import React, { useState, useEffect } from 'react';
import { TextField, Grid, CircularProgress, Box } from '@mui/material';
import { Product } from '../types/Product';
import ProductCard from './ProductCard';
import { fetchProducts } from '../api/productApi';

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const products = await fetchProducts();
                setProducts(products);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <TextField
                label="Search products..."
                variant="outlined"
                fullWidth
                margin="normal"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            {loading ? (
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <CircularProgress />
                </Box>
            ) : (
                <Grid container spacing={2}>
                    {filteredProducts.map(product => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <ProductCard product={product} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    );
};

export default ProductList;