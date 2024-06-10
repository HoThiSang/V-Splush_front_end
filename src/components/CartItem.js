import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Button } from "antd";

function CartItem(cart) {
  const {
    id,
    index,
    image_url,
    product_name,
    unit_price,
    total_price,
    quantity,
    handleIncreaseQuantity,
    handleDescreaseQuantity,
    handleDeletCart
  } = cart;

  return (
    <tr key={index}>
      <th scope="row"><input type="checkbox" /></th>
      <td className="image-row">
        <img
          className="image-cart-item"
          id="image-cart-items"
          src={image_url}
          alt={product_name}
        />
      </td>
      <td>{product_name}</td>
      <td>{unit_price}</td>
      <td>{quantity}</td>
      <td>
        <Button
          onClick={() => handleIncreaseQuantity(id)}
          type="primary"
          icon={<PlusOutlined />}
        ></Button>
        <Button
          onClick={() => handleDescreaseQuantity(id)}
          type="primary"
          icon={<MinusOutlined />}
        ></Button>
      </td>
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
