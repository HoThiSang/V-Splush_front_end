import React, { useState, useEffect } from "react";
import axiosService from "../../services/configAxios";
import ProductItem from "../../components/ProductItem";
import ProductFilterSidebar from "../../components/ProductFilterSidebar";
import { Pagination } from "antd";
import { useLocation } from "react-router-dom";
import { Spin } from "antd";
import styled from 'styled-components';

const numEachPage = 9;

const contentStyle = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4
};
const content = <div style={contentStyle} />;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;
`;
function Product() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [page, setPage] = useState({ minValue: 0, maxValue: numEachPage });
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("keyword");
  const [loading, setLoading] = useState(true);

  const fetchProductData = async () => {
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
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product data", error);
      setLoading(true);

    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    setFilteredProducts(
      selectedCategory
        ? products.filter((product) => product.category_id === selectedCategory)
        : products
    );
  }, [products, selectedCategory]);

  useEffect(() => {
    if (searchKeyword.trim() === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.product_name
            .toLowerCase()
            .includes(searchKeyword.toLowerCase())
        )
      );
    }
  }, [searchKeyword, products]);

  useEffect(() => {
    if (keyword) {
      setSearchKeyword(keyword);
    }
  }, [keyword]);

  const startIndex = page.minValue;
  const endIndex = page.maxValue;

  const handleChange = (value) => {
    setPage({
      minValue: (value - 1) * numEachPage,
      maxValue: value * numEachPage,
    });
  };

  const handleSearch = (event) => {
    setSearchKeyword(event.target.value);
  };

  if (loading)
    return (
      <Container>
        <Row>
          <Spin tip="Loading" size="large">
            {content}
          </Spin>
        </Row>
        <Row>
          <Spin tip="Loading...">
          </Spin>
        </Row>
      </Container>
    );
    
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
                id={product.id}
                link={product.image_url}
                title={product.product_name}
                description={product.description}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
        </div>
      </div>
      <Pagination
        defaultCurrent={1}
        defaultPageSize={numEachPage}
        onChange={handleChange}
        total={filteredProducts.length}
        className="product"
      />
    </div>
  );
}

export default Product;
