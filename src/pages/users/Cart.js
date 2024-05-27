import { CartItem } from "../../components";
import React, { useState, useEffect } from "react";
import axiosService from "../../services/configAxios";

function Cart() {
  const [carts, setCarts] = useState([]);

  const fetchData = async () => {
    const { data } = await axiosService.get("/shopping-cart");
    setCarts(data.carts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(carts);
  const handleIncreaseQuantity = async (id) => {
    try {
      const { data } = await axiosService.post(`/update-cart/${id}`, {
        quantity: 1,
        product_id: id
      });
      console.log(data);
      const index = carts.findIndex((item) => item.product_id === id);
      if (index !== -1) {
        const list = [...carts];
        list[index].quantity = data.data.quantity;
        setCarts(list);
      }
    } catch (error) {
      throw new Error("Something went wrong!");
    }
  };

  const handleDescreaseQuantity = async (id) => {
    try {
      const { data } = await axiosService.post(`/sub-update-cart/${id}`, {
        quantity: 1,
        product_id: id
      });
      console.log(data);
      const index = carts.findIndex((item) => item.product_id === id);
      if (index !== -1) {
        const list = [...carts];
        list[index].quantity = data.data.quantity;
        setCarts(list);
      }
    } catch (error) {
      throw new Error("Something went wrong!");
    }
  };

  const handleDeletCart = async (id) => {
    try {
      const { data } = await axiosService.delete(`delete-cart/${id}`);
      console.log(data);

      const updatedCarts = carts.filter((item) => item.product_id !== id);
      setCarts(updatedCarts);
    } catch (err) {
      console.error("Error deleting cart item:", err);
      throw new Error("Failed to delete cart item. Please try again later.");
    }
  };
  return (
    <>
      <div className="container cart-component">
        <div className="row">
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
              {carts.length === 0 ? (
                <div>
                  <h1>Your cart is empty</h1>
                </div>
              ) : (
                carts.map((cart, index) => (
                  <CartItem
                    key={index}
                    id={cart.product_id}
                    index={index}
                    image_url={cart.image_url}
                    discount={cart.discount}
                    total_price={cart.total_price}
                    product_name={cart.product_name}
                    quantity={cart.quantity}
                    handleDeletCart={handleDeletCart}
                    handleIncreaseQuantity={handleIncreaseQuantity}
                    handleDescreaseQuantity={handleDescreaseQuantity}
                  />
                ))
              )}
              <tr>
                <h4>Total price : </h4>
                <h4>Shipping : </h4>
              </tr>
              <tr>
                <div className="cart-checkout-btn pull-right">
                  <button
                    type="submit"
                    className="btn btn-primary checkout-btn"
                  >
                    <a href="#!">PROCCED TO CHEKOUT</a>
                  </button>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Cart;
