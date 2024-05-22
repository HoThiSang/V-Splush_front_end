function ProductItem({ link, title, description,price }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
      <div className="card m-2" style={{ width: '25rem' }}>
        <img src={link} className="card-img-top" alt="Product" />
        <div className="card-body">
          <h4 className="card-title text-danger">{title}</h4>
          <p className="card-text description">{description}</p>
          <h5 className="card-price">{ "$"+ price }</h5>
        </div>
      </div>
    </div>
  );
}
export default ProductItem;
