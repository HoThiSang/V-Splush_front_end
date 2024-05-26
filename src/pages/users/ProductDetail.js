import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import useParams
import axiosService from '../../services/configAxios';
import Button from '../../components/Button';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState('');
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosService.get(`/admin-product-detail/${id}`);
        const data = response.data;
        console.log(data)
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
  }, [id]); 

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
    <div className="container">
      <div className="product-detail row">
        <div className="left-section col-6">
          <div className="row image1">
            <img src={mainImage.image_url} alt="Main Product" className="main-image" />
          </div>
          <div className="row border">
            {images.map((image, index) => (
              <div className='col-md-4 border'>
                <img
                  key={index}
                  src={image.image_url}
                  alt={`Thumbnail ${index + 1}`}
                  className="thumbnail"
                  onClick={() => handleThumbnailClick(image)}
                />
              </div>
            ))}
          </div>
          <div className="thumbnails">
          </div>
        </div>
        <div className="right-section col-6">
          <h1 className="product-title">{product.product_name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
          <hr />
          <div className="add-to-cart">
            <Link to="/">
              <Button className="btn-outline-success" width="600px" title="Add to cart" color="#abd07e" />
            </Link>
          </div>
          <div className="buy-now">
            <Button className="btn-outline-success" width={"600px"} href="#" title="Buy now" color={"#abd07e"} />
          </div>
        </div>
      </div>
      <div className="ingredient">
        <h3>Ingredient</h3>
        <hr/>
        <p className="product-description">{product.ingredient}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
