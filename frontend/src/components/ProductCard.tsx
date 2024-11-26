import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Product } from '../types/Product';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={product.thumbnail}
                alt={product.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
                <Typography variant="h6" color="text.primary">
                    ${product.price}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;