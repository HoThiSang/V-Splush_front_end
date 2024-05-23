import { Link } from "react-router-dom";

function BlogItem({props}) {
  const { id, title, content, image_url } = props;
  return (
    <div className="card card-blog">
      <Link to={`/blog-detail/${id}`}>
        <img src={image_url} className="card-img-top card-img-blog" alt="..." />
      </Link>
      <div className="card-body card-body-blog" >
        <h5 className="card-title card-title-blog">{title}</h5>
        <p className="card-text card-title-blog">{content}</p>
      </div>
    </div>
  );
}



export default BlogItem;


