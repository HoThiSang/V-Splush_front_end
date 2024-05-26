import Button from "./Button";
function CardItem(props) {
  const {product_name, description, image_url, image_name} = props;
  return (

    <div className="col-md-3">
      <div className="card">
          <img src={ image_url } className="card-img-top" alt={ image_name } style={{width:'100%',height:'220px'}}/>
          <div className="card-body">
            <h5 className="card-title product_name">{product_name}</h5>
            <p className="card-text description" style={{width:'100%'}}>{ description }</p>
            <Button className="btn btn-outline-success" href="#" title="VIEW MORE" />
          </div>
        </div>
</div>
  
  );
}

export default CardItem;
