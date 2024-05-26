import { React, useState, useEffect } from "react";
import { Bennefit, Location, About, CardItem } from "../../components";
import { BennefitData } from "../../data";
import { Banner } from "../../layouts";
import axios from "axios";
import axiosService from "../../services/configAxios";

function Home() {
  const [popularProducts, setPopularProducts] = useState([]);
  // const [load, setLoad] = useState(false);
  const [banners, setBanners] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/admin-product"
      );
      setPopularProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(popularProducts);
  const displayedProducts = popularProducts.slice(0, 3);

  const fechDataBanner = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/admin-show-all-banner"
      );
      console.log(response.data);
      setBanners(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fechDataBanner();
  }, []);
  console.log(banners);
  return (
    <>
      <div class="body-content outer-top-xs" id="top-banner-and-menu">
        <div class="container">
          <div class="row">
            <div className="container main-body">
              <div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder ">
                <div id="hero">
                  <div
                    id="owl-main"
                    className="owl-carousel owl-inner-nav owl-ui-sm"
                  >
                    {banners.map((item) => (
                      <Banner
                        key={item.id}
                        content={item.content}
                        sub_title={item.sub_title}
                        image_url={item.image_url}
                        // image_name={item.image_name}
                      />
                    ))}
                  </div>
                </div>
                <div className="row mt-6 section-product-popular">
                  {displayedProducts.map((item, index) => (
                    <CardItem
                      key={index}
                      product_name={item.product_name}
                      description={item.description}
                      image_url={item.image_url}
                    />
                  ))}
                </div>

                <div className="container mt-6 about-service">
                  <About />
                </div>
                <div className="row mt-6 section-promotion">
                  <p className="text-center">OUR AWESOME BENEFITS</p>
                  <h2 className="text-center mb-5">
                    Actually what you’ll get from
                  </h2>
                  {BennefitData.map((item, index) => (
                    <Bennefit key={index} props={item} />
                  ))}
                </div>
              </div>
            </div>

            <div className="container mt-5">
              <Location />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
