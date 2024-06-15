import React, { useState, useEffect } from "react";
import axiosService from "../../services/configAxios";
import { Alert } from "antd";
import { useParams } from "react-router";

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  const getBlogDetail = async (id) => {
    try {
      const res = await axiosService.get(`/admin-show-post/${id}`);
      setBlog(res.data.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };
  useEffect(() => {
    getBlogDetail();
  }, [id]);

  return (
    <>
      <Alert
        description="Bank your beauty sleep with our overnight skin care edit"
        type="info"
        className="alert-blog-detail"
      />
      <div className="div-blog-detail">
        <img
          className="img-blog-detail"
          src={blog.image_url}
          alt={blog.title}
        />
        <p className="p-blog-content">
          <span>{blog.content}</span>
        </p>
      </div>
    </>
  );
}

export default BlogDetail;
