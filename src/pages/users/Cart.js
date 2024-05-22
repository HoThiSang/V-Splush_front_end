import { CartItem } from "../../components";
import React, { useState, useEffect } from "react";
import axiosService from "../../services/configAxios";
// import { Checkbox  } from "antd";

function Cart() {
  const [carts, setCarts] = useState([]);
  // const [selectedItems, setSelectedItems] = useState([]);

  const fetchData = async () => {
    const { data } = await axiosService.get("/shopping-cart");
    setCarts(data.carts);
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  
  const handleDeletCart = async (id) => {
    await axiosService.delete(`delete-cart/${id}`);
    setCarts(
       carts.filter((cart) => {
          return cart.id !== id;
       })
    );
 };
 
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "text-center"
        }}
      >
        <table className="table table-striped text-center">
          <thead className="text-center">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Product name</th>
              <th scope="col">Product name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart, index) => (
              <CartItem
                key={index}
                id={cart.product_id}
                image_url={cart.image_url}
                discount={cart.discount}
                total_price={cart.total_price}
                product_name={cart.product_name}
                quantity={cart.quantity}
                handleDeletCart={handleDeletCart}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Cart;
