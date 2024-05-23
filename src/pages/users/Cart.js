import { CartItem } from "../../components";
import React, { useState, useEffect } from "react";
import axiosService  from '../../services/configAxios';

function Cart() {
  const [carts, setCarts] = useState([]);
  // const [isChangeQuantity, setIsChangeQUantity] = useState(0);

  const fetchData = async () => {
    const { data } = await axiosService.get('/shopping-cart');
    setCarts(data.carts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  
  const handleIncreaseQuantity = async (id) => {
    try {
      const { data } = await axiosService.post(`/update-cart/${id}`, { quantity:1, product_id:id} );
      console.log(data)
      const index = carts.findIndex(item=> item.product_id===id) 
      if(index!==-1){
        const list = [...carts] ;
        list[index].quantity = data.data.quantity
        setCarts(list)
        
      }
    } catch (error) {
      throw new Error('Something went wrong!');
    }
  };

  const handleDescreaseQuantity = async (id) => {
    try {
      const { data } = await axiosService.post(`/sub-update-cart/${id}`, { quantity: 1 , product_id:id});
      console.log(data)
      const index = carts.findIndex(item=> item.product_id===id) 
      if(index!==-1){
        const list = [...carts] ;
        list[index].quantity = data.data.quantity
        setCarts(list)
      }
    } catch (error) {
      throw new Error('Something went wrong!');
    }
  };

  return (
    <>
      <div
        className="container cart-component"
      >
        <table className="table table-striped text-center">
          <thead className="text-center">
            <tr>
              <th scope="col"></th>
              <th scope="col">Image</th>
              <th scope="col">Product name</th>
              <th scope="col">Product name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Action quantity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          { 
            carts.map((cart, index) => 
            <CartItem 
                key={index}
                id={cart.product_id}
                index={index}
                image_url={cart.image_url} 
                discount={cart.discount} 
                total_price={cart.total_price} 
                product_name={cart.product_name}
                quantity={cart.quantity}
                // currentQUantity 
                handleIncreaseQuantity={handleIncreaseQuantity}
                handleDescreaseQuantity={handleDescreaseQuantity}

             />)}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Cart;
