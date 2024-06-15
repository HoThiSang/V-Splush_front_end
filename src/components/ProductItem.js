import { Link } from "react-router-dom";
function ProductItem({ id, link, title, description, price }) {
const formatCurrency = (amount, currency = 'VND') => {
    return amount.toLocaleString('vi-VN', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };
  return (
    <div className="col-6 col-sm-6 col-md-4 d-flex justify-content-center product-bottom">
      <Link to={`/productdetail/${id}`}>
        <div className="card card-product" style={{ width: "28rem" }}>
          <img src={link} className="card-img-top" alt="Product" />
          <div className="card-body card-body-product">
            <h4 className="card-title-product text-danger">{title}</h4>
            <p className="card-text description-product">{description}</p>
            <h5 className="card-price">{formatCurrency(price)}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default ProductItem;
