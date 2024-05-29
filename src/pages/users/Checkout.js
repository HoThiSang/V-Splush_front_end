import { useState, useEffect } from "react";
import { Input } from "../../components";
import axiosService from "../../services/configAxios";
import { useNavigate } from "react-router";

const CheckoutForm = () => {
  const [carts, setCarts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");

  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const { data } = await axiosService.get("/shopping-cart");
      setCarts(data.carts);
      console.log(data.carts);
    } catch (error) {
      throw new Error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSelect = (e) => {
    console.log(e.target.value);
    setPayment(e.target.value);
  }
  // debugger
  const handelSubmitForm = async(e) => {
    e.preventDefault();
    console.log("Username:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Address:", address);
    console.log("Payment:", payment);
    const redirect = 'redirect';
    try {
      const postData = await axiosService.post('/checkout', {name, email, phone, address, payment,user_id: 2 , totalPrice: 20000,redirect});
      window.location.href=postData.data.data;
      
    } catch (error) {
      throw new Error('Wrong went you checkout')
    }
  }
 

  return (
    <form className="form-checkout" onSubmit={handelSubmitForm}>
      <div className="container">
        <h3 className="checkout-heading">CHECKOUT PAGE</h3>
        <hr style={{ borderWidth: "2px", borderColor: "#C4C4C4" }} />
        <h4 className="checkout-heading text-center mt-4">Bill information</h4>

        <div className="row">
          <div className="form-container">
            
            <div className="form-group mb-3 col-md-6">
              <label htmlFor="" className="form-label">Name</label>
              <input type="text"  className="form-control"  value={name}  onChange={(e) => setName(e.target.value)}  />
            </div>
            <div className="form-group mb-3 col-md-6">
              <label htmlFor="" className="form-label">Email</label>
              <input type="email" className="form-control" value={email}  onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group mb-3 col-md-6">
              <label htmlFor="" className="form-label">Phone number</label>
              <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="form-group mb-3 col-md-6">
              <label htmlFor="" className="form-label">Address</label>
              <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
          </div>
        </div>
        <input type="hidden" name="user_id" value={2} />
        <h4 className="checkout-heading text-center mt-4">Order information</h4>
        <div className="form-container">
          <div className="form-row mt-3">
            <div className="form-group col-md-3">
              <label htmlFor="product">Product name</label>
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="quantity">Quantity</label>
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="unit-price">Unit price</label>
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="total-price">Total price</label>
            </div>
            {carts.map((item, index) => (
              <>
                <div className="form-group col-md-3" key={index}>
                  <label htmlFor="product">{item.product_name}</label>
                </div>
                <div className="form-group col-md-3" key={index}>
                  <label htmlFor="quantity">X{item.quantity}</label>
                </div>
                <div className="form-group col-md-3" key={index}>
                  <label htmlFor="unit-price">X{item.unit_price}</label>
                </div>
                <div className="form-group col-md-3" key={index}>
                  <label htmlFor="total-price">{item.total_price}</label>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="form-container">
          <div className="form-group col-md-12 text-right">
            <hr
              style={{
                borderWidth: "2px",
                borderColor: "#C4C4C4",
                marginTop: "10px"
              }}
            />
            <div
              className="form-inline"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <h4 className="checkout-heading">Total of payment</h4>
              <label htmlFor=""></label>
              <input type="hidden" name="total_price" />
            </div>
          </div>
          <div className="form-group col-md-12 text-right">
            <div
              className="form-inline"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <h4 className="checkout-heading">Payment method</h4>
              <select value={payment} onChange={handleSelect}
                className="btn-sm form-select custom-select"
                name="payment_method"
              >
               <option value="">--Choose an option--</option>
                <option value="VNP">VNP</option>
                <option value="COD">COD</option>
              </select>
            </div>
            <hr
              style={{
                borderWidth: "2px",
                borderColor: "#C4C4C4",
                marginTop: "10px"
              }}
            />
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
  );
};

export default CheckoutForm;
