import BlogItem from "../../components/BlogItem";
import React, { useState, useEffect } from "react";
import axiosService from "../../services/configAxios";
import { Alert, Pagination, Spin } from "antd";
import styled from 'styled-components';

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
function Blog() {
  const [blogs, setBlogs] = useState([]);
  const numEachPage = 8;
  const [page, setPage] = useState({ minValue: 0, maxValue: numEachPage });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosService.get("/admin-show-all-post");
        setBlogs(response.data.data);
      setLoading(false);

      } catch (error) {
        console.error("Error fetching blog data:", error);
        setLoading(true);

      }
    };
    fetchData();
  }, []);
  const handleChange = (value) => {
    setPage({
      minValue: (value - 1) * numEachPage,
      maxValue: value * numEachPage,
    });
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
    <>
      <Alert description="Articles & News" type="info" className="ant-alert-blog"/>
      <div className="blog">
        <div className="container">
          <div className="row  main-blog">
            {blogs.length > 0 &&
              blogs
                .slice(page.minValue, page.maxValue)
                .map((blog, index) => <BlogItem key={index} props={blog} />)}
          </div>
          <Pagination
            defaultCurrent={1}
            defaultPageSize={numEachPage}
            onChange={handleChange}
            total={blogs.length}
            className="blog"
          />
        </div>
      </div>
    </>
  );
}


export default Blog;
