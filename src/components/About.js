function About() {
  return (
    <div className="row mt-5 section-service">
      <div className="col-md-4">
        <h2 className="">
          The Beauty is about being Comfortable in your own skin! True beauty
          emanates
        </h2>
        <div className="about mt-5">
          <p className="">
            The Beauty is about being Comfortable in your own skin! True beauty
            emanates from embracing your unique features and from embracing your
            unique features and
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
            <i className="fas fa-star icon"></i>
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
      <div className="col-md-4 mt-2" style={{ marginRight: 20 }}>
        <div className="text-center mt-4" id="image-service">
        <div className="image-service-1"> <img
            src="https://res.cloudinary.com/di9iwkkrc/image/upload/v1715920167/upload_image/Background_mvkre6.jpg"
            alt="Image"
            className="image-service"
            style={{
              width: "30em",
              height: "28em",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            }}
          />
          </div>
         
          <div className="image-service-2"> <img
            src="https://res.cloudinary.com/di9iwkkrc/image/upload/v1715920236/upload_image/pexels-sora-shimazaki-5938440_1_gl0lg4.jpg"
            alt="Image"
            className="image-service"
            style={{
              width: "30em",
              height: "28em",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            }}
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
