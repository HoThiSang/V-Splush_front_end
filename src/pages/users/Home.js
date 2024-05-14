import React from "react";
import Banner from "../../components/Banner";
import GoogleMapsEmbed from "../../components/GoogleMapsEmbed";

function Home() {
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder ">
          <Banner />
          {/*  */}
          <div className="container mt-6 ">
            <div className="row mt-5 section-service">
              <div className="col-md-4">
                <h2 className="">
                  The Beauty is about being Comfortable in your own skin! True
                  beauty emanates
                </h2>
                <div className="about mt-5">
                  <p className="">
                    The Beauty is about being Comfortable in your own skin! True
                    beauty emanates from embracing your unique features and from
                    embracing your unique features and
                  </p>
                </div>
                <div
                  className="row"
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    padding: "5px"
                  }}
                >
                  <div className="text-center item-icon-home">
                    <i
                      className="fas fa-star icon"
                      // style={{ fontSize: "24px", marginBottom: "10px" }}
                    ></i>
                    <h4>Beauty</h4>
                  </div>

                  <div className="text-center item-icon-home mt-5">
                    <i class="fa-solid fa-face-smile icon"></i>

                    <h4>Great</h4>
                  </div>
                  <div className="text-center item-icon-home mt-5">
                    <i class="fa-solid fa-circle-half-stroke icon"></i>
                    <h4>Genuine</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-2">
                <div className="text-center mt-4">
                  <img
                    src="https://res.cloudinary.com/dt8km1sxl/image/upload/v1710517848/V-Splush/makeup_sp1.2_icedxx.webp"
                    alt="Image"
                    className="image-service"
                    style={{
                      width: "32em",
                      height: "28em",
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-6 section-promotion">
            <p className="text-center">OUR AWESOME BENEFITS</p>
            <h2 className="text-center mb-5">Actually what you’ll get from</h2>
            <div className="col-md-4">
              <i class="fa-solid fa-check-to-slot icon-section-promotion"></i>
              <h5 class="card-title">Feel more confident</h5>
              <p class="card-text">
                Our products help you feel more confident about your natural
                beauty.
              </p>
            </div>
            <div className="col-md-4">
              <i class="fa-solid fa-check-to-slot   icon-section-promotion"></i>
              <h5 class="card-title">Glow with radiance</h5>
              <p class="card-text">
                Our products help your skin become more radiant and glowing.
              </p>
            </div>

            <div className="col-md-4">
              <i class="fa-solid fa-check-to-slot  icon-section-promotion"></i>
              <h5 class="card-title">Enjoy healthier skin</h5>
              <p class="card-text">
                Taking care of your skin with quality products helps it become
                healthier and more beautiful.
              </p>
            </div>
          </div>

          <div className="row mt-5 section-promotion">
            <div className="col-md-4">
              <i class="fa-solid fa-check-to-slot icon-section-promotion"></i>
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to.
              </p>
            </div>
            <div className="col-md-4">
              <i class="fa-solid fa-check-to-slot   icon-section-promotion"></i>
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to.
              </p>
            </div>

            <div className="col-md-4">
              <i class="fa-solid fa-check-to-slot  icon-section-promotion"></i>
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to.
              </p>
            </div>
          </div>
          
        </div>
      </div>
      <div class="container mt-5">
            <div class="row justify-content-center">
              <div class="col-sm-6">
                <h3>
                  Come visit our store and experience the difference for
                  yourself!
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                </p>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris...
                </p>
              </div>
              <div class="col-sm-6">
                <GoogleMapsEmbed />
              </div>
            </div>
          </div>
    </>
  );
}
export default Home;
