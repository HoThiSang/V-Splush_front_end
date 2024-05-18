function CartItem({props}){
    const { image_url, product_name, total_price, discount, user_id }  = props.cart;
   
    return (
        <tr>
          <th scope="row"><i className="fa-solid fa-heart"></i></th>
          <td><img src={image_url} alt={product_name} /></td>
          <td>{product_name}</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
    )
}

export default CartItem;