import { Link } from "react-router-dom"

const Article = (props) => {
    const {title, image_url, image_name, id} = props
    return (
        <Link to={`/blog-detail/${id}`}>
        <figure className="article">
        <img src={image_url} alt={image_name} />
        <figcaption>
          <h3>{title}</h3>
          <p>
            {title}
          </p>
        </figcaption>
      </figure>
      </Link>
    )
}

export default Article