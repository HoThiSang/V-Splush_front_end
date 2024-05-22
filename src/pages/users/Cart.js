import { CartItem } from "../../components";
import React, { useState, useEffect } from "react";
import axiosService  from '../../services/configAxios';


function Cart() {
  const [carts, setCarts] = useState([]);
  const [quantity, setQuantity] = useState(0);
  
  const fetchData = async () => {
    const { data } = await axiosService.get('/shopping-cart');
    setCarts(data.carts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(carts)

  const handleIncreaseQuantity = async (id) => {
    try {
      console.log('handle Increase Quantity ')
      // Make an API call to update the quantity on the server
      // const { data } = await axiosService.put(`/shopping-cart/${id}`, { quantity: quantity + 1 });

      // // Update the local state
      // const updatedCarts = carts.map((cart) => {
      //   if (cart.id === id) {
      //     return { ...cart, quantity: data.quantity };
      //   }
      //   return cart;
      // });
      // setCarts(updatedCarts);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDescreaseQuantity = async (id) => {
    try {
      // console.log('handle Descrease Quantity')
      const { data } = await axiosService.post(`/update-cart/${id}`, { quantity: quantity - 1 });

      const updatedCarts = carts.map((cart) => {
        if (cart.id === id) {
          return { ...cart, quantity: data.quantity };
        }
        return cart;
      });
      setCarts(updatedCarts);
      console.log(updatedCarts)
    } catch (error) {
      console.error(error);
    }
  };

  // return (
  //   // ... the rest of your component
  // );

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
                id={cart.id}
                image_url={cart.image_url} 
                discount={cart.discount} 
                total_price={cart.total_price} 
                product_name={cart.product_name}
                quantity={cart.quantity}
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
