import React, { useState, useEffect } from "react";
import WishlistItem from "../../components/WishList";
import axiosService from "../../services/configAxios";
import { fetchWishlistData } from '../../services/configAxios';

function WishList() {
  const [wishlist, setWishList] = useState([]);

useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWishlistData();
        setWishList(data);
      } catch (error) {
        console.error('Error fetching the wishlist data', error.message);
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
