export default function Benefit({ props }) {
  return (
    <div className="col-md-4">
      <i className="fa-solid fa-check-to-slot icon-section-promotion"></i>
      <h5 className="card-title">{ props.title }</h5>
      <p className="card-text">
            {props.description}
      </p>
    </div>
  );
}
