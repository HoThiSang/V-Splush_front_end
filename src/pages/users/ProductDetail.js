import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axiosService from '../../services/configAxios';
import { Button } from '../../components';
import ProductItem from '../../components/ProductItem';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState('');
  const [popularProducts, setPopularProducts] = useState([]);
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
      const response = await axiosService.get(`/admin-product-detail/${id}`);
      const data = response.data;
      setProduct(data.productDetail);
      setImages(data.imageAll);
      setMainImage(data.imageAll[0]);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await axiosService.get('/admin-product');
      setPopularProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    setUser(JSON.parse(storedUser));
  }
  useEffect(() => {
  }, []);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  const handleAddToCart = () => {
    if (!user) {
      navigate('/login');
    } else {
      alert('Add to cart successfully');
    }
  };

  const handleBuyNow = () => {
    if (!user) {
      navigate('/login');
    } else {
      navigate('/checkout');
    }
  };

  return (
    <div className="container">
      {product && (
        <>
          <div className="product-detail row">
            <div className="left-section col-6">
              <div className="row image1">
                {mainImage && <img src={mainImage.image_url} alt="Main Product" className="main-image" />}
              </div>
              <div className="row border">
                {images.map((image, index) => (
                  <div className="col-md-4 border" key={`${image.id}-${index}`}>
                    <img
                      src={image.image_url}
                      alt={`Thumbnail ${index + 1}`}
                      className="thumbnail"
                      onClick={() => handleThumbnailClick(image)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="right-section col-6">
              <h1 className="product-title">{product.product_name}</h1>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price}</p>
              <hr />
              <div className="add-to-cart">
                <Button
                  className="btn-outline-success"
                  width="600px"
                  onClick={handleAddToCart}
                  title="Add to cart"
                  color="#abd07e"
                />
              </div>
              <div className="buy-now">
                <Button
                  className="btn-outline-success"
                  width="600px"
                  onClick={handleBuyNow}
                  title="Buy now"
                  color="#abd07e"
                />
              </div>
            </div>
          </div>
          <div className="ingredient">
            <h3>Ingredient</h3>
            <hr />
            <p className="product-description">{product.ingredient}</p>
          </div>
        </>
      )}
      <h3>Popular Products</h3>
      <hr />
      <div className="row">
        {popularProducts.slice(0, 3).map((popularProduct, index) => (
          <ProductItem
            key={index} 
            id={popularProduct.id}
            link={popularProduct.image_url}
            title={popularProduct.product_name}
            description={popularProduct.description}
            price={popularProduct.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
