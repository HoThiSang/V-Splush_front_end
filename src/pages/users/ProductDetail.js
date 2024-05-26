import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import axiosService from '../../services/configAxios';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState('');
  const [error, setError] = useState(null);

  const { id } = useParams(); // Use useParams to access URL parameters

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosService.get(`/admin-product-detail/${id}`);
        const data = response.data;

        if (data.status === 'success') {
          setProduct(data.productDetail);
          setImages(data.imageAll);
          setMainImage(data.imageAll[0]);
        } else {
          setError('Product not found');
        }
      } catch (error) {
        setError('Error fetching product data');
        console.error('Error fetching product data:', error);
      }
    };

    fetchProduct();
  }, [id]); // Add id to the dependencies array

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <div className="left-section">
        <img src={mainImage} alt="Main Product" className="main-image" />
        <div className="thumbnails">
          {images.map((image, index) => (
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
        <h1 className="product-title">{product.name}</h1>
        <p className="product-price">${product.price}</p>
        <button className="btn add-to-cart">Add to Cart</button>
        <button className="btn buy-now">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetail;
