import { Link } from "react-router-dom";

function BlogItem(blog) {
  const { id, title, content, image_url } = blog;
  return (
    <div className="card">
      <Link to={`/blog-detail/${id}`}>
        <img src={image_url} className="card-img-top blog-img" alt="..." />
      </Link>
      <div className="card-body">
        <h5 className="card-title ">{title}</h5>
        <p className="card-text blog-content">{content}</p>
      </div>
    </div>
  );
}

export default BlogItem;
