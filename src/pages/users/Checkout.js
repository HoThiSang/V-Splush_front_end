import { useState, useEffect } from "react";
import { Input, Label } from "../../components";
import axiosService from "../../services/configAxios";
import { Modal } from "antd";
import {  useNavigate } from "react-router-dom"
const CheckoutForm = () => {
  const [carts, setCarts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  
  const fetchData = async () => {
    try {
      const { data } = await axiosService.get("/user/shopping-cart", {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
    });
      setCarts(data.data);
      console.log(data.data);
     
    } catch (error) { 
      alert("Error fetching data:", error);
     
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSelect = (e) => {
    console.log(e.target.value);
    setPayment(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handelSubmitForm = async (e) => {
    e.preventDefault();
    const redirect = "redirect";
    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);
      
    const { id } = user;
    try {
      if(payment==="NCB"){
      const postData = await axiosService.post("/user/checkout", {
        name,
        email,
        phone,
        address,
        payment,
        id,
        redirect
      }, 
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        }}
      );
      window.location.href = postData.data.data;
      }else{
        await axiosService.post("/user/checkout", {
          name,
          email,
          phone,
          address,
          payment,
          id,
          redirect
        },
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          }}
        );
        navigate('/')
      }
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

  return (
    <>
    <form className="form-checkout" onSubmit={handelSubmitForm}>
      <div className="container">
        <h3 className="checkout-heading">CHECKOUT PAGE</h3>
        <hr className="hr-checkout-page" />
        <h4 className="checkout-heading text-center mt-4">Bill information</h4>

        <div className="row">
          <div className="form-container">

            <Input
              label="Name"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
             <Input
              label="Phone"
              type="text"
              value={phone}
              onChange={handlePhoneChange}
            />
            <Input
              label="Address"
              type="text"
              value={address}
              onChange={handleAddressChange}
            />
          </div>
        </div>
        <input type="hidden" name="user_id" value={2} />
        <h4 className="checkout-heading text-center mt-4">Order information</h4>
        <div className="form-container">
         
          <table className="table">
          <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Unit price</th>
            <th>Total price</th>
           
          </tr>
          </thead>
          <tbody>
          {carts.map((item, index) =>(
            <tr key={index}>
              <td>{item.product_name}</td>
              <td>{item.quantity}</td>
              <td>{item.unit_price}</td>
              <td>{item.total_price}</td>
            </tr>
          ) )}
          </tbody>
            
          </table>
        </div>
        <div className="form-container">
          <div className="form-group col-md-12 text-right">
            <hr className="hr-checkout-page-2" />
            <div className="form-inline">
              <h4 className="checkout-heading">Total of payment</h4>
              <label htmlFor=""></label>
              <input type="hidden" name="total_price" />
            </div>
          </div>
          <div className="form-group col-md-12 text-right">
            <div className="form-inline">
              <h4 className="checkout-heading">Payment method</h4>
              <select
                value={payment}
                onChange={handleSelect}
                className="btn-sm form-select custom-select"
                name="payment_method"
              >
                <option value="">--Choose an option--</option>
                <option value="NCB">VNP</option>
                <option value="COD">COD</option>
              </select>
            </div>
            <hr className="hr-checkout-page-2" />
          </div>
          <button
            type="submit"
            name="redirect"
            className="btn-lg btn-block custom-button"
          >
            Place Order
          </button>
        </div>
      </div>
    </form>
    <Modal  className="error"
          title="Error"
          open={isErrorModalVisible}
          onOk={() => setIsErrorModalVisible(false)}
          onCancel={() => setIsErrorModalVisible(false)}
        >
          <p>{errorMessage}</p>
        </Modal>
        </>
  );
};

export default CheckoutForm;
