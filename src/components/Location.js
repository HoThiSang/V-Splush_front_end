import GoogleMapsEmbed from "./GoogleMapsEmbed";
function Location() {
  return (
    <div class="row justify-content-center location">
      <div class="col-sm-5">
        <h3>
          Come visit our store and experience the difference for yourself!
        </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...
        </p>
      </div>
      <div class="col-sm-6">
        <GoogleMapsEmbed />
      </div>
    </div>
  );
}

export default Location;
