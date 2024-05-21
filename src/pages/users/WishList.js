import React, { useState, useEffect } from "react";
import axios from "axios";
import WishlistItem from "./WishList";

function WishList() {
  const [wishlist, setWishList] = useState([]);
  
  const fetchData = async () => {
  try {
    const { data } = await axios.get('http://127.0.0.1:8000/api/show-allwishlist');
    console.log(data);
    // Kiểm tra dữ liệu trước khi sử dụng phương thức map
    if (data) {
      setWishList(data.wishlist || []);
    } else {
      console.error("Error: Data or wishlist is undefined.");
    }
  } catch (error) {
    console.error("Error fetching the wishlist data", error);
  }
};



  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <table className="table table-striped text-center">
        <thead className="text-center">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Product Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((item, index) => (
            <WishlistItem 
              key={index}
              index={index}
              image_url={item?.product?.image_url} 
              product_name={item?.product?.product_name}
              category={item?.product?.category?.category_name}
              price={item?.product?.price} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WishList;
