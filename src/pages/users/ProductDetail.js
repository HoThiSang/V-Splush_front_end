import React, { useState, useEffect } from 'react';
import axios from 'axios';
 // Import your CSS file for styling

const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    // Fetch product data from the backend
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${productId}`);
        const productData = response.data;
        setProduct(productData);
        setMainImage(productData.images[0]);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <div className="left-section">
        <img src={mainImage} alt="Main Product" className="main-image" />
        <div className="thumbnails">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="thumbnail"
              onClick={() => handleThumbnailClick(image)}
            />
          ))}
        </div>
      </div>
      <div className="right-section">
        <h1 className="product-title">{product.title}</h1>
        <p className="product-price">${product.price}</p>
        <button className="btn add-to-cart">Add to Cart</button>
        <button className="btn buy-now">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetail;
