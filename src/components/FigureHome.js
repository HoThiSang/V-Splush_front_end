import { Link } from "react-router-dom";

const FigureHome = ( props ) => {
    const {title , image_url, image_name, id} = props ;
    return (
        <Link to={`/productdetail/${id}`}>
        <figure className="card">
            <img src={image_url} alt={image_name} />
            <figcaption>{title}</figcaption>
          </figure>
          </Link>
    )
}

export default FigureHome