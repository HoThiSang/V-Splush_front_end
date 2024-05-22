import { Button, Checkbox } from "antd";
import React from "react";

function CartItem(cart) {
  const {
    id,
    image_url,
    product_name,
    discount,
    total_price,
    quantity,
    handleDeletCart,
  } = cart;


  return (
    <tr key={id}>
      <th>
        <Checkbox
          className="cart-checkbox"
          // checked={selectedItems.includes(cart.id)}
          // onChange={() => handleCheckboxChange(cart.id)}
        />
      </th>
      <td>
        <img src={image_url} alt={product_name} style={{ width: "160px" }} />
      </td>
      <td>{product_name}</td>
      <td>{total_price}</td>
      <td>{discount}</td>
      <td>{quantity}</td>
      <td>
        <Button
          type="primary"
          shape="round"
          size="middle"
          onClick={() => handleDeletCart(id)}
        >
          <i className="fa-solid fa-trash"></i>
        </Button>
      </td>
    </tr>
  );
}

export default CartItem;
