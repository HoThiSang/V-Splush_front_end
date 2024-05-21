import BlogItem from "../../components/BlogItem";
import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/admin-show-all-post";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setBlogs(response.data.data);
      } catch (error) {
        console.error("Error fetching blog data:", error); 
      }
    };
    fetchData();
  }, []);

  return (

    <div className="container">
        <div className="row">
      {blogs.map((blog,index) => (
        <div className="col-sm-12 col-md-4 col-lg-4 ">
        <BlogItem
        key={index}
          id={blog.id}
          title={blog.title}
          content={blog.content}
          image_url={blog.image_url}
        />
        </div>
      ))}
      </div>
      </div>)}

export default Blog;
