import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "../../components/ProductItem";
import ProductFilterSidebar from "../../components/ProductFilterSidebar";
function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/admin-product"
        );
        const updatedProducts = {};
        response.data.forEach((product) => {
          if (!updatedProducts[product.id]) {
            updatedProducts[product.id] = {
              ...product,
              image_url: product.image_url,
            };
          }
        });
        setProducts(Object.values(updatedProducts));
      } catch (error) {
        console.error("Error fetching the products data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="row products">
        <div className="">
          <ProductFilterSidebar></ProductFilterSidebar>
        </div>
        <div className="col-md-8">
          <div className="">
            <div className="row">
              {products.map((product, index) => (
                <ProductItem
                  key={index}
                  link={product.image_url}
                  title={product.product_name}
                  description={product.description}
                  price={product.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
