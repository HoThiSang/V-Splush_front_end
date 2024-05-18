import Button from "./Button";
function CardItem({title,text,link}) {
  return (
    <>
      <div className="card" style={{width:  '20rem'}}>
          <img src={link} className="card-img-top" alt="..." style={{width:'100%',height:'200px'}}/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text" style={{width:'100%'}}>{text}</p>
            <Button className="btn btn-outline-success" href="#" title="VIEW MORE"/>
          </div>
        </div>

    </>
  );
}

export default CardItem;
