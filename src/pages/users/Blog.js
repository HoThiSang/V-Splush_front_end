import BlogItem from "../../components/BlogItem";
import React, { useState, useEffect } from "react";
import axiosService from "../../services/configAxios";
import { Col, Row, Alert, Pagination } from "antd";
import { useParams } from "react-router";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosService.get("/admin-show-all-post");
        setBlogs(response.data.data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Alert description="Articles & News" type="info" />
      <Row>
        {blogs.map((blog, index) => (
          <Col span={8} xs={20} sm={16} md={12} lg={8} xl={6}>
            <BlogItem key={index} props={blog} />
          </Col>
        ))}
      </Row>
      <Pagination defaultCurrent={1} total={50} />
    </>
  );
}


function BlogDetail() {
  
  const { id } = useParams();
  const [blog, setBlog] = useState(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosService.get(`/admin-show-post/${id}`);
        setBlog(response.data.data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    fetchData();
  }, []);


  return (
    <>
    <Alert description="Bank your beauty sleep with our overnight skin care edit" type="info" />
    <img  src={blog.image_url} className="img-blog-detail" alt="" />
    <p>{blog.content}</p>
    </>
  )

}

export { Blog, BlogDetail };

