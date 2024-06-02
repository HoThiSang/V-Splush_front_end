import { Link } from "react-router-dom";
import Button from "./Button";
function CardItem(props) {
  const {id, product_name, description, image_url, image_name} = props;
  return (

    <div className="col-md-4 px-3 mt-3">
      <div className="card">
        <Link to={`/productdetail/${id}`}>
          <img src={image_url} className="card-img-top" alt={image_name} style={{ width: '100%', height: '220px' }} />
        </Link>
          <div className="card-body">
            <h5 className="card-title product_name">{product_name}</h5>
          <p className="card-text description" style={{ width: '100%' }}>{description}</p>
          <Link to={`/productdetail/${id}`}>
            <Button className="btn btn-outline-success" href="#" title="VIEW MORE" />
          </Link>
          </div>
        </div>
</div>

  );
}

export default CardItem;
