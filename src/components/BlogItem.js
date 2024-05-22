import { Link } from "react-router-dom";

function BlogItem({props}) {
  const { id, title, content, image_url } = props;
  return (
    <div className="card" style={{marginLeft:'30px'}}>
      <Link to={`/blog-detail/${id}`} component={'BlogDteail'}>
        <img src={image_url} className="card-img-top blog-img" alt="..." />
      </Link>
      <div className="card-body" style={{backgroundColor:'rgba(237, 245, 247, 1)'}}>
        <h5 className="card-title blog-content">{title}</h5>
        <p className="card-text blog-content">{content}</p>
      </div>
    </div>
  );
}

export default BlogItem;
