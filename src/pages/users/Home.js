import {React, useState, useEffect } from "react";
import {
  Banner, Bennefit, Location, About, CardItem
} from "../../components";
import { BennefitData } from "../../data";
import axios from "axios";

function Home() {
  const [popularProducts, setPopularProducts] = useState([]);
  // const [load, setLoad] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/admin-product');
      setPopularProducts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(popularProducts)
  const displayedProducts = popularProducts.slice(0, 3); // Chỉ lấy 3 sản phẩm đầu tiên

  return (
    
    <>
      <div
        className="container main-body"
      >
        <div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder ">
          <Banner />
           <div className="row mt-6 section-product-popular">
            {displayedProducts.map((item)=> (
              <CardItem 
                key={item.id}
                product_name={item.product_name}
                description={item.description}
                image_url={item.image_url}
               />
            )
             
          )}
           </div>
          
          <div className="container mt-6 about-service" >
            <About />
          </div>
          <div className="row mt-6 section-promotion">
            <p className="text-center">OUR AWESOME BENEFITS</p>
            <h2 className="text-center mb-5">Actually what you’ll get from</h2>
            {BennefitData.map((item, index) => (
              <Bennefit key={index} props={item} />
            ))}
          </div>
        </div>
      </div>
      <div class="container mt-5">
        <Location />
      </div>
    </>
  );
}
export default Home;
