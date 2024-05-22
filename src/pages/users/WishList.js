import React, { useState, useEffect } from "react";
import axios from "axios";
import WishlistItem from "../../components/WishList";

function WishList() {
  const [wishlist, setWishList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/show-allwishlist');
        const { data } = response;
        console.log(data);
        if (data && data.status === "success") {
          setWishList(data.data || []);
        } else {
          console.error("Error: Invalid data format or API response.");
        }
      } catch (error) {
        console.error("Error fetching the wishlist data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <table className="table table-striped text-center">
            <thead className="thead-dark">
              <tr>
                <th scope="col"></th>
                <th scope="col" className="text-center">Image</th>
                <th scope="col" className=" col-md-6 text-center">Product Name</th>
                <th scope="col" className="col-md-6 text-center">Category</th>
                <th scope="col" className="text-center">Price</th>
                <th scope="col" className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((wishlist, index) => (
                <WishlistItem 
                  key={index}
                  image_url={wishlist.image_url} 
                  product_name={wishlist.product_name}
                  category_name={wishlist.category_name}
                  price={wishlist.price} 
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default WishList;
