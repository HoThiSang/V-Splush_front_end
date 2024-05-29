import { React, useState, useEffect } from "react";
import { Location, About, CardItem, BannerBottom } from "../../components";
import { Banner } from "../../layouts";
import axiosService from "../../services/configAxios";
import { BannerData } from "../../data";

function HomeTest() {
  const [popularProducts, setPopularProducts] = useState([]);
  const [banners, setBanners] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axiosService.get("/admin-product");
      setPopularProducts(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      throw new Error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(popularProducts);
  const displayedProducts = popularProducts.slice(0, 3);

  const fechDataBanner = async () => {
    try {
      const response = await axiosService.get("/admin-show-all-banner");
      console.log(response.data.data);
      setBanners(response.data.data);
    } catch (error) {
      throw new Error("Error fetching data:", error);
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
            <div
              className="container"
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
                      {BannerData.map((banner, index) => (
                        <BannerBottom
                          key={index}
                          title={banner.title}
                          sub_title={banner.sub_title}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  id="product-tabs-slider"
                  className="scroll-tabs outer-top-vs wow fadeInUp mb-5"
                >
                  {displayedProducts.map((item, index) => (
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
