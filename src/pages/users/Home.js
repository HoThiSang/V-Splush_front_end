import React from "react";
import {
  Banner,
  Bennefit,
  Location,
  About
} from "../../components";
import { BennefitData } from "../../data";

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
