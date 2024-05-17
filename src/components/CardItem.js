import * as Button from "./Button";
function CardItem() {
  return (
    <>
      <div className="card" style={{width:  '20rem'}}>
          <img src="https://res.cloudinary.com/dt8km1sxl/image/upload/v1710518102/V-Splush/makeup_sp2.2_fawzgp.webp" className="card-img-top" alt="..." style={{width:'100%',height:'200px'}}/>
          <div className="card-body">
            <h5 className="card-title">Makeup & Skincarre</h5>
            <p className="card-text" style={{width:'100%'}}>Indulge in the artistry of beauty with our curated selection of makeup and skincare essentials.</p>
            <Button.ButtonOuline/>
          </div>
        </div>

    </>
  );
}

export default CardItem;
