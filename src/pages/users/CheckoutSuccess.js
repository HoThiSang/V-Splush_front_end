import { Link, useSearchParams } from "react-router-dom";
import axiosService from "../../services/configAxios";
import {  useEffect, useRef } from "react";
import { Button } from "antd";
const CheckoutSuccess = () => {
  const [searchParams] = useSearchParams();
  const vnpResponseCode = searchParams.get("vnp_ResponseCode");
  const vnpTxnRef = searchParams.get("vnp_TxnRef");
  const hasUpdatedPost = useRef(false);

  const updatePost = async (vnpTxnRef) => {
    await axiosService.post(`/user/update-order/${vnpTxnRef}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`
      }
    });
  };

  useEffect(() => {
    if (vnpResponseCode !== "00" && !hasUpdatedPost.current) {
      updatePost(vnpTxnRef);
      hasUpdatedPost.current = true;
    }
  }, [vnpResponseCode, vnpTxnRef]);
  
  return (
    
    <div className="container d-flex checkout-page-success">
      {vnpResponseCode ==="00" ? (
        <div>
        <i className="fa-solid fa-check checkout-icon"></i>
        <h2>Checkout successfully !</h2>
        <div className="btn-checkout">
          <Link to="/" className="btn-1"><Button>Return to Home page</Button></Link>
          <Link to="/order-history" className="btn-2"><Button>Check Order</Button></Link>
        </div>
      </div>
      ) : (
        <h2>Checkout thất bại</h2>
      )}
    </div>
  );
};

export default CheckoutSuccess;
