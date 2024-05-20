function CartItem(cart ){
    const { image_url, product_name,  discount, total_price , quantity}  = cart;
   
    return (
        <tr>
          <th scope="row"><i className="fa-solid fa-heart"></i></th>
          <td ><img src={image_url} alt={product_name}  style={{ width: '160px'}}/></td>
          <td>{product_name}</td>
          <td>{total_price}</td>
          <td>{ discount }</td>
          <td>{quantity}</td>
          <td><i class="fa-solid fa-trash"></i></td>
        </tr>
    )
}

export default CartItem;