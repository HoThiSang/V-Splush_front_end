import React from "react";

function WishlistItem({ image_url, product_name, category_name, price }) {
  return (
    <tr>
      <th scope="row"><i className="fa-solid fa-heart"></i></th>

      <td><img src={image_url} alt={product_name} className="wishlist-img" /></td>
      <td>{product_name}</td>
      <td>{category_name}</td>
      <td>{price}</td>
      <td><i className="fa-solid fa-trash"></i></td>
    </tr>
  );
}


export default WishlistItem;

