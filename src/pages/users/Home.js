import React, { useState, useEffect } from "react";
import axiosService from "../../services/configAxios";
import "../../styles/Home.css";
import FigureHome from "../../components/FigureHome";
import Article from "../../components/Article";
import Benefit from "../../components/Benefit";
import BennefitData from "../../data/Benefit";
import GoogleMapsEmbed from "../../components/GoogleMapsEmbed";
import {Spin } from "antd";
import styled from 'styled-components';
import Carousel from "../../components/Carousel";

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

const Home = () => {
  const [banners, setBanners] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fechDataBanner = async () => {
    try {
      const response = await axiosService.get("/admin-show-all-banner");
      console.log(response.data.data);
      setBanners(response.data.data);
      setLoading(false);
    } catch (error) {
      // alert("Error fetching data:", error);
      setLoading(true);
    }
  };
  useEffect(() => {
    fechDataBanner();
  }, []);

  const getProduct = async () => {
    try {
      const response = await axiosService.get("/popular-product");
      setPopularProducts(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      alert("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const getPost = async () => {
    try {
      const response = await axiosService.get("/popular-post");
      setPosts(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      alert("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);
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
    <>
 
      <Carousel />
      <div className="container product-popular">
        <div className="wrapper">
          <h2>
            <strong>
              Products popular<span>( 4 )</span>
            </strong>
          </h2>
          <div className="cards">
            {popularProducts.map((product, index) => (
              <FigureHome
                key={index}
                id={product.id}
                image_url={product.image_url}
                image_name={product.image_name}
                title={product.product_name}
              />
            ))}
          </div>

          <h2>
            <strong>What's new?</strong>
          </h2>

          <div className="news">
            {posts.map((post, index) => (
              <Article
                key={index}
                id={post.id}
                image_url={post.image_url}
                image_name={post.image_name}
                title={post.title}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="container benefist-homepage">
        <h1 className="text-center mb-5">Our benefist</h1>
        <div className="cards">
          {BennefitData.map((item, index) => (
            <Benefit key={index} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
      <div>
        <GoogleMapsEmbed />
      </div>
    </>
  );
};

export default Home;
