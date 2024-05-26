const Card = (props) => {
    const {product_name, image_url, image_name} = props;
  return (
    <div className="item item-carousel">
      <div className="products">
        <div className="product">
          <div className="product-image">
            <div className="image">
              <a href="#!">
                <img src={image_url} alt={image_name} />
              </a>
            </div>
            <div className="tag new">
              <span>new</span>
            </div>
          </div>
          <div className="product-info text-left">
            <h3 className="name">
              <a href="#!">{product_name}</a>
            </h3>
            <div className="rating rateit-small"></div>
            <div className="description"></div>
            <div className="product-price">
              <span className="price">$450.99</span>
              <span className="price-before-discount">$800</span>
            </div>
          </div>
          <div className="cart clearfix animate-effect">
            <div className="action">
              <ul className="list-unstyled">
                <li className="add-cart-button btn-group">
                  <button
                    data-toggle="tooltip"
                    className="btn btn-primary icon"
                    type="button"
                    title="Add Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                  <button className="btn btn-primary cart-btn" type="button">
                    Add to cart
                  </button>
                </li>
                <li className="lnk wishlist">
                  <a
                    data-toggle="tooltip"
                    className="add-to-cart"
                    href="#!"
                    title="Wishlist"
                  >
                    <i className="icon fa fa-heart"></i>
                  </a>
                </li>
                <li className="lnk">
                  <a
                    data-toggle="tooltip"
                    className="add-to-cart"
                    href="#!"
                    title="Compare"
                  >
                    <i className="fa fa-signal" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;