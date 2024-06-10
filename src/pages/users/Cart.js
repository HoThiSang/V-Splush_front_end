import { CartItem } from "../../components";
import React, { useState, useEffect } from "react";
import axiosService from "../../services/configAxios";
import { Link } from "react-router-dom";
import { Modal } from "antd";
function Cart() {
  const [carts, setCarts] = useState([]);
  const user = localStorage.getItem('user')
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

  const fetchData = async () => {
    if(user){
      const  data = await axiosService.get("/user/shopping-cart",  {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        }})
        setCarts(data.data.data);
        console.log(data.data.data)
       
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleIncreaseQuantity = async (id) => {
    try {
      const { data } = await axiosService.post(`/user/update-cart/${id}`, {
        quantity: 1,
        product_id: id
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        }});
      console.log(data);
      const index = carts.findIndex((item) => item.product_id === id);
      if (index !== -1) {
        const list = [...carts];
        list[index].quantity = data.data.quantity;
        setCarts(list);
      }
    } catch (error) {
      alert('Something wrong when update cart!')
    }
  };

  const handleDescreaseQuantity = async (id) => {
    try {
      const { data } = await axiosService.post(`/user/sub-update-cart/${id}`, {
        quantity: 1,
        product_id: id
      },{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        }});
      console.log(data);
      const index = carts.findIndex((item) => item.product_id === id);
      if (index !== -1) {
        const list = [...carts];
        list[index].quantity = data.data.quantity;
        setCarts(list);
      }
    } catch (error) {
      alert('Something wrong when update cart!')
    }
  };

  const handleDeletCart = async (id) => {
    try {
      const { data } = await axiosService.delete(`/user/delete-cart/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        }});
      console.log(data);

      const updatedCarts = carts.filter((item) => item.product_id !== id);
      setCarts(updatedCarts);
      setSuccessMessage('Deleted cart successfully!');
      setIsSuccessModalVisible(true);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
        setIsErrorModalVisible(true);
      } else {
        setErrorMessage('An error occurred. Please try again later.');
        setIsErrorModalVisible(true);
      }
    }
  };
  let sum =0;
  return (
    <>
      <div className="container cart-component">
        <div className="row">
        {!carts ? (
          <div className="cart-empty ">
                  <h1>Your cart is empty</h1>
                  <div style={{ alignItems:'center', border: '1px solid gray', borderRadius:'20px' }}>
                  <Link to='/products' className="btn">Continuos shopping</Link>
                  </div>
            </div> 
            
            ) : (
          <table className="table table-striped text-center">
            <thead className="text-center">
              <tr>
                <th scope="col"></th>
                <th scope="col">Image</th>
                <th scope="col">Product name</th>
        
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Action quantity</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
             
               { carts.map((cart, index) => (
                
                  <CartItem
                    key={index}
                    id={cart.product_id}
                    index={index}
                    image_url={cart.image_url}
                    unit_price={cart.unit_price}
                    total_price={cart.total_price}
                    product_name={cart.product_name}
                    quantity={cart.quantity}
                    handleDeletCart={handleDeletCart}
                    handleIncreaseQuantity={handleIncreaseQuantity}
                    handleDescreaseQuantity={handleDescreaseQuantity}
                  />
                ))
            }
              <tr>
                <h4 style={{ color:'red' }}>Total price : {sum} </h4>
                <h4>Shipping : Free</h4>
              </tr>
              <tr>
                <div className="cart-checkout-btn pull-right">
                  <button
                    type="submit"
                    className="btn btn-primary checkout-btn"
                  >
                   <Link to={`/checkout`} className="btn">PROCCED TO CHEKOUT</Link>
                  </button>
                </div>
              </tr>
            </tbody>
          </table>) }
        </div> 
      </div>
      <Modal  className="error"
          title="Error"
          open={isErrorModalVisible}
          onOk={() => setIsErrorModalVisible(false)}
          onCancel={() => setIsErrorModalVisible(false)}
        >
          <p>{errorMessage}</p>
        </Modal>
        <Modal
          title="Success"
          open={isSuccessModalVisible}
          onOk={() => setIsSuccessModalVisible(false)}
          onCancel={() => setIsSuccessModalVisible(false)}
        >
          <p>{successMessage}</p>
        </Modal>
    </>
  );
}

export default Cart;
