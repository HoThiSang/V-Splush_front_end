import { CartItem } from "../../components";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Cart() {
  const [carts, setCarts] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get("http://127.0.0.1:8000/api/shopping-cart");
    setCarts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(carts);
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Product name</th>
              <th scope="col">Category name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(carts) &&
              carts.length > 0 &&
              carts.map((cart, index) =>  <CartItem key={index} cart={cart} />  ) }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Cart;
