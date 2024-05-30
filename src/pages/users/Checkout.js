import { useState, useEffect } from "react";
import { Input, Label } from "../../components";
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
      alert("Error fetching data:", error);
      throw new Error("Error fetching data:", error);
     
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
    console.log("Username:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Address:", address);
    console.log("Payment:", payment);
    const redirect = "redirect";
    try {
      const postData = await axiosService.post("/checkout", {
        name,
        email,
        phone,
        address,
        payment,
        user_id: 2,
        totalPrice: 20000,
        redirect
      });
      window.location.href = postData.data.data;
    } catch (error) {
      throw new Error("Wrong went you checkout");
    }
  };

  return (
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
          <div className="form-row mt-3">
            <Label idName="product" label="Product name" />
            <Label idName="quantity" label="Quantity" />
            <Label idName="unit-price" label="Unit price" />
            <Label idName="total-price" label="Total price" />
            {carts.map((item, index) => (
              <>
                <Label key={index} idName="product" label={item.product_name} />
                <Label key={index} idName="product" label={item.quantity} />
                <Label key={index} idName="product" label={item.unit_price} />
                <Label key={index} idName="product" label={item.total_price} />
              </>
            ))}
          </div>
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
                <option value="VNP">VNP</option>
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
  );
};

export default CheckoutForm;
