import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem.js';

const ProductList = () => {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/admin-product');// Fetch data 
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();

  }, []); 

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
