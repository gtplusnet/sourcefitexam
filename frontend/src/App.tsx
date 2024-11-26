import React from 'react';
import ProductList from './components/ProductList';
import { Container } from '@mui/material';

const App: React.FC = () => {
  return (
    <Container>
      <h1>Product Listing</h1>
      <ProductList />
    </Container>
  );
};

export default App;