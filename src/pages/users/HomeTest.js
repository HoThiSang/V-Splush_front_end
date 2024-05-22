import { React, useState, useEffect } from "react";
import { Bennefit, Location, About, CardItem } from "../../components";
import { BennefitData } from "../../data";
import { Banner } from "../../layouts";
import axios from "axios";
// import axiosService from "../../services/configAxios";
import "./style.css";
import { Card } from "antd";

function HomeTest() {
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
    <div className="body-content outer-top-xs" id="top-banner-and-menu">
      <div className="container">
        <div className="row">
          <div className="container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
          
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
                      />
                    ))}
                  </div>
                </div>
                <div className="info-boxes wow fadeInUp">
                  <div className="info-boxes-inner">
                    <div className="row">
                      <div className="col-md-6 col-sm-4 col-lg-4">
                        <div className="info-box">
                          <div className="row">
                            <div className="col-xs-12">
                              <h4 className="info-box-heading green">
                                money back
                              </h4>
                            </div>
                          </div>
                          <h6 className="text">30 Days Money Back Guarantee</h6>
                        </div>
                      </div>

                      <div className="hidden-md col-sm-4 col-lg-4">
                        <div className="info-box">
                          <div className="row">
                            <div className="col-xs-12">
                              <h4 className="info-box-heading green">
                                free shipping
                              </h4>
                            </div>
                          </div>
                          <h6 className="text">Shipping on orders over $99</h6>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-4 col-lg-4">
                        <div className="info-box">
                          <div className="row">
                            <div className="col-xs-12">
                              <h4 className="info-box-heading green">
                                Special Sale
                              </h4>
                            </div>
                          </div>
                          <h6 className="text">Extra $5 off on all items </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="product-tabs-slider" className="scroll-tabs outer-top-vs wow fadeInUp mb-5"
                >
                       { displayedProducts.map((item, index) => (
                        <CardItem 
                          key={item.id} 
                          product_name={item.product_name}
                          description={item.description}
                          image_url={item.image_url}
                        />
                  ))}
                </div>
            </div>
          </div>
        </div>
        <About />
      
      </div>
     
    </div>
    <Location />
    </>
  );
}
export default HomeTest;