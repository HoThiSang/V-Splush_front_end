import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HighlightedProductCard from './components/HighlightedProductCard.js';
import React, { useState, useEffect } from 'react';

function App() {
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
  const highlightedProducts = products.slice(0, 4);
  return (
    <div className='cnt-home'>
      <Header />
      <h1>Highlighted Products</h1>
      <div className="highlighted-products">
        {highlightedProducts.map(product => (
          <HighlightedProductCard 
            key={product.id}
            imageUrl={product.image_url}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;

