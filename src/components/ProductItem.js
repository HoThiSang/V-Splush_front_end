import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="item item-carousel">
      <div className="products">
        <div className="product">
          <div className="product-image">
            <div className="image">
              <a href={`/detail/${product.id}`}>
                <img src={`/images/${product.image_url}`} alt="" />
              </a>
            </div>
            {product.discount > 0 ? (
              <div className="tag new"><span>{parseInt(product.discount)}%</span></div>
            ) : null}
          </div>
          <div className="product-info text-left">
            <h3 className="name"><a href={`/detail/${product.id}`}>{product.product_name}</a></h3>
            <div className="rating rateit-small"></div>
            <div className="description"></div>
            <div className="product-price">
              <span className="price">{product.price}</span>
              <span className="price-before-discount">{product.discounted_price}</span>
            </div>
          </div>
          <div className="cart clearfix animate-effect">
            <div className="action">
              <ul className="list-unstyled">
                <li className="add-cart-button">
                  <form id="addToCartForm" action={`/addtocart/${product.id}`} method="POST">
                    <input type="hidden" name="id" value={product.id} />
                    <button type="submit" className="btn btn-primary icon">
                      <i className="fa fa-shopping-cart"></i>
                    </button>
                  </form>
                </li>
                <li className="wishlist-button">
                  <form action={`/addToWishlist/${product.id}`} method="POST">
                    <input type="hidden" name="id" value={product.id} />
                    <button className="btn btn-primary" data-toggle="tooltip" data-placement="right" title="Wishlist">
                      <i className="fa-solid fa-heart"></i>
                    </button>
                  </form>
                </li>
                <li className="lnk">
                  <a data-toggle="tooltip" className="add-to-cart" href={`/detail/${product.id}`} title="Compare">
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

export default ProductItem;
