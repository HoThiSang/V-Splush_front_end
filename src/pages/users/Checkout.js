import { useState, useEffect } from "react";
import { Input } from "../../components";
import axiosService from "../../services/configAxios";

const CheckoutForm = () => {
  const [carts, setCarts] = useState([]);

  const fetchData = async () => {
    const { data } = await axiosService.get("/shopping-cart");
    setCarts(data.carts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <form className="form-checkout">
      <div className="container">
        <h3 className="checkout-heading">CHECKOUT PAGE</h3>
        <hr style={{ borderWidth: "2px", borderColor: "#C4C4C4" }} />
        <h4 className="checkout-heading text-center mt-4">Bill information</h4>

        <div className="row">
          <div className="form-container">
            <Input type="text" label="User name" />
            <Input type="email" label="Email" />
            <Input type="text" label="Phone number" />
            <Input type="text" label="Address" />
          </div>
        </div>

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
                <div className="form-group col-md-3">
                  <label htmlFor="product"></label>
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="quantity">X</label>
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="unit-price">X</label>
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="total-price"></label>
                </div>
              </>
            ))}

            <input type="hidden" />
          </div>
        </div>
        <input type="hidden" name="totalPrice" />
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
            <hr
              style={{
                borderWidth: "2px",
                borderColor: "#C4C4C4",
                marginTop: "10px"
              }}
            />
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
              <select
                className="btn-sm form-select custom-select"
                name="payment_method"
              >
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
