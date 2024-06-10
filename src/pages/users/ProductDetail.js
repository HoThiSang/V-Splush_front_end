import React, { useState, useEffect } from "react";
import {  useParams, useNavigate } from "react-router-dom";
import axiosService from "../../services/configAxios";
import { Button } from "../../components";
import ProductItem from "../../components/ProductItem";
import { Modal } from "antd";

const ProductDetail = () => {
  const [product, setProduct] = useState();
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const [popularProducts, setPopularProducts] = useState([]);
  const [user, setUser] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);


  const fetchProduct = async () => {
    try {
      const response = await axiosService.get(`/admin-product-detail/${id}`);
      const data = response.data;
      setProduct(data.productData);
      setImages(data.imageData);
      setMainImage(data.imageData[0]);
    } catch (error) {
      console.error("Error fetching product data:", error);
      alert("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await axiosService.get("/admin-product");
      setPopularProducts(response.data.data);
    } catch (error) {
      alert("Error fetching data:", error);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
  }, []);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  const handleAddToCart = async () => {
    if (user.id) {
      const res = await axiosService.post(
        `/user/add-to-cart`,
        {
          product_id: product.id,
          quantity: quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      setSuccessMessage('Add product to cart successfully!');
      setIsSuccessModalVisible(true);
    } else {
      navigate("/login");
    }
  };

  const handleBuyNow = (id) => {
    if (user.id) {
      const productCart = {
        quantity: quantity,
        productName: product.product_name,
        unitPrice: product.price,
        totalPrice : quantity * product.price
      };
      localStorage.setItem("product", JSON.stringify(productCart));
      navigate("/buy-now");
    } else {
      navigate("/login");
    }
  };

  const increaseQuantity = (e) => {
    setQuantity(quantity + 1);
  };
  
  const decreaseQuantity = (e) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container">
      {product && (
        <>
          <div className="product-detail row">
            <div className="left-section col-6">
              <div className="row image1">
                {mainImage && (
                  <img
                    src={mainImage.image_url}
                    alt="Main Product"
                    className="main-image"
                  />
                )}
              </div>
              <div className="row border thumbnail-container">
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
              <p className="product-price">{product.price} VND</p>
              <div class="quantity-container">
                <div class="quantity-controls">
                <button class="add-quantity-button" onClick={decreaseQuantity}>
                  --
                </button>
                  <input type="text" id="quantity-input" value={quantity} readonly />
                  <button class="add-quantity-button"  onClick={increaseQuantity}>
                    +
                  </button>
                </div>
              </div>
             
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
                  onClick={() => handleBuyNow(product.id)}
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
      <div className="popular-products">
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
      <Modal  className="error"
          title="Error"
          open={isErrorModalVisible}
          onOk={() => setIsErrorModalVisible(false)}
          onCancel={() => setIsErrorModalVisible(false)}
        >
          <p>{errorMessage}</p>
        </Modal>
        <Modal
          title="Success"
          open={isSuccessModalVisible}
          onOk={() => setIsSuccessModalVisible(false)}
          onCancel={() => setIsSuccessModalVisible(false)}
        >
          <p>{successMessage}</p>
        </Modal>
    </div>
  );
};

export default ProductDetail;
