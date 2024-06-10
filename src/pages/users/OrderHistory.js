import { Link } from "react-router-dom"
import React, {useState, useEffect} from "react"
import axiosService from "../../services/configAxios";
const OrderHistory = () =>{
    const [orders, setOrders] = useState([]);

    const getOrderData = async()=> {
        try {
            const response = await axiosService.get('/user/show-all-order',{
              headers: {
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
              },
            }
              
            );
            setOrders(response.data.data)
        } catch (error) {

        }
    }

    useEffect(()=>{
        getOrderData();
    }, [])

    return (
        <>
            <div className="container" style={{ marginBottom: "300px" }}>
        <div className="row">
        {orders.length === 0 ? (
          <div className="cart-empty ">
                  <h1>Your cart is empty</h1>
                  <div style={{ alignItems:'center', border: '1px solid gray', borderRadius:'20px' }}>
                  <Link to='/products' className="btn">Continuos shopping</Link>
                  </div>
            </div> ) : (
          <table className="table table-striped">
            <thead className="text-center">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
        
                <th scope="col">Payment</th>
                <th scope="col">Order status</th>
              </tr>
            </thead>
            <tbody>
                {orders.map((item)=>(
                  <tr>

                  <td>{item.name}</td>

                    <td>{item.address}</td>
                    <td>{item.phone_number}</td>
                    <td>{item.payment_method}</td>
                    <td>{item.order_status}</td>

                  </tr>
                ))}
            </tbody>
            </table>)}
            </div>
            </div>
    
        </>
    )
}

export default OrderHistory