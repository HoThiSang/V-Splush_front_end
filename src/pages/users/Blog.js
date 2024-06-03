import BlogItem from "../../components/BlogItem";
import React, { useState, useEffect } from "react";
import axiosService from "../../services/configAxios";
import { Alert, Pagination } from "antd";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const numEachPage = 8;
  const [page, setPage] = useState({ minValue: 0, maxValue: numEachPage });

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
  const handleChange = (value) => {
    setPage({
      minValue: (value - 1) * numEachPage,
      maxValue: value * numEachPage,
    });
  };
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
