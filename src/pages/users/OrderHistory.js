import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axiosService from "../../services/configAxios";
import ProfileLayout from "./ProfileLayout";
import { Button, Modal } from "antd";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  const formatCurrency = (amount, currency = "VND") => {
    return amount.toLocaleString("vi-VN", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  };
  const getOrderData = async () => {
    try {
      const response = await axiosService.get("/user/show-all-order", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`
        }
      });
      setOrders(response.data.data);
    } catch (error) {}
  };
  console.log(orders);
  useEffect(() => {
    getOrderData();
  }, []);
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;

  if (user) {
    const { image_url, name } = user;
    console.log(image_url);
    console.log(name);
  } else {
  }

  const handleDeletOrder = async (id) => {
    try {
      await axiosService.delete(`/user/delete-order/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`
        }
      });
      setOrders(orders.filter((item) => item.id !== id));
      alert("Delete order successfully !");
    } catch (error) {
      alert("Something wrong when delete order");
    }
  };
  return (
    <ProfileLayout image={user.image_url} username={user.name}>
      <div className="container order-page">
        <div className="row">
          {orders.length === 0 ? (
            <div className="cart-empty ">
              <h1>Your cart is empty</h1>
              <div
                style={{
                  alignItems: "center",
                  border: "1px solid gray",
                  borderRadius: "20px"
                }}
              >
                <Link to="/products" className="btn">
                  Continuos shopping
                </Link>
              </div>
            </div>
          ) : (
            <table className="table table-hover">
              <thead className="text-center">
                <tr>
                  <th scope="col">Code Order</th>
                  <th scope="col">Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Total price</th>

                  <th scope="col">Payment</th>
                  <th scope="col">Order status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((item) => (
                  <tr key={item.id}>
                    <td>{item.order_code}</td>
                    <td>{item.name}</td>

                    <td>{item.address}</td>
                    <td>{item.phone_number}</td>
                    <td>{formatCurrency(item.total_price)}</td>
                    <td>{item.payment_method}</td>
                    <td>{item.order_status}</td>
                    <td>
                      <Button
                        onClick={() => handleDeletOrder(item.id)}
                        style={{ borderRadius: "30px" }}
                      >
                        {" "}
                        <i
                          style={{ color: "red" }}
                          className="fa-solid fa-trash"
                        ></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </ProfileLayout>
  );
};

export default OrderHistory;
