import React, { useState, useEffect } from "react";
import axiosService from "../../services/configAxios";
import ProductItem from "../../components/ProductItem";
import ProductFilterSidebar from "../../components/ProductFilterSidebar";
import { Pagination } from "antd";

const numEachPage = 9;
function Product() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [page, setPage] = useState({ minValue: 0, maxValue: numEachPage });
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axiosService.get("/admin-product");
      const responseData = response.data;
      const updatedProducts = {};
      responseData.data.forEach((product) => {
        if (!updatedProducts[product.id]) {
          updatedProducts[product.id] = {
            ...product,
            image_url: product.image_url,
          };
        }
      });
      setProducts(Object.values(updatedProducts));
    } catch (error) {
      console.error("Error fetching product data", error);
      alert("Error fetching product data", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredProducts(
      selectedCategory
        ? products.filter((product) => product.category_id === selectedCategory)
        : products
    );
  }, [products, selectedCategory]);

  const startIndex = page.minValue;
  const endIndex = page.maxValue;

  const handleChange = (value) => {
    setPage({
      minValue: (value - 1) * numEachPage,
      maxValue: value * numEachPage,
    });
  };

  return (
    <div className="product-container">
      <div className="row product-item no-margin-left">
        <ProductFilterSidebar setSelectedCategory={setSelectedCategory} />
        <div className="col-md-8">
          {filteredProducts
            .slice(startIndex, endIndex)
            .map((product, index) => (
              <ProductItem
                key={index}
                link={product.image_url}
                id={product.id}
                title={product.product_name}
                description={product.description}
                price={product.price}
              />
            ))}
        </div>
      </div>
      <Pagination
        defaultCurrent={1}
        defaultPageSize={numEachPage}
        onChange={handleChange}
        total={filteredProducts.length}
        className='product'
      />
    </div>
  );
}

export default Product;
