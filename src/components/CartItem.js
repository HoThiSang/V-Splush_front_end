function CartItem({ props }) {
  const { image_url, product_name, total_price, quantity } = props;
  console.log(image_url);
  return (
    <tr>
      <th scope="row"><i className="fa-solid fa-heart"></i></th>
      <td><img src={image_url} alt={product_name} /></td>
      <td>{product_name}</td>
      <td>{total_price}</td>
      <td>{quantity}</td>
      <td></td>
    </tr>
  );
}

export default CartItem;