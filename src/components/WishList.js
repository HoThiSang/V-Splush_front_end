import React from "react";

function WishlistItem({ index, image_url, product_name, category, price }) {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td><img src={image_url} alt={product_name} style={{ width: '160px' }} /></td>
      <td>{product_name}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td><i className="fa-solid fa-trash"></i></td>
    </tr>
  );
}

export default WishlistItem;
