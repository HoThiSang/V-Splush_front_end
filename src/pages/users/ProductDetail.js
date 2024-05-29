import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axiosService from '../../services/configAxios';
import { Button} from "../../components";
import ProductItem from "../../components/ProductItem";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState('');
  const [popularProducts, setPopularProducts] = useState([]);
  const { id } = useParams();

  const fetchProduct = async () => {
    try {
      const response = await axiosService.get(`/admin-product-detail/${id}`);
      const data = response.data;
      console.log(data);
      setProduct(data.productDetail);
      setImages(data.imageAll);
      setMainImage(data.imageAll[0]);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await axiosService.get("/admin-product");
      setPopularProducts(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };
  return (
    <div className="container">
      {product && (
        <div className="product-detail row">
          <div className="left-section col-6">
            <div className="row image1">
              {mainImage && <img src={mainImage.image_url} alt="Main Product" className="main-image" />}
            </div>
            <div className="row border">
              {images.map((image, index) => (
                <div className='col-md-4 border' key={image.id || index}>
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
            {product && (
              <>
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
                  <Button className="btn-outline-success" width="600px" href="#" title="Buy now" color="#abd07e" />
                </div>
              </>
            )}
          </div>
        </div>
      )}
      {product && (
        <div className="ingredient">
          <h3>Ingredient</h3>
          <hr />
          <p className="product-description">{product.ingredient}</p>
        </div>
      )}
      <h3>Popular Products</h3>
      <hr />
      {popularProducts.slice(0, 3).map((product) => (
        <ProductItem
          key={id}
          link={product.image_url}
          title={product.product_name}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductDetail;
