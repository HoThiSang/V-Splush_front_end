export default function Benefit({ props }) {
  return (
    <div className="col-md-4">
      <i class="fa-solid fa-check-to-slot icon-section-promotion"></i>
      <h5 class="card-title">{ props.title }</h5>
      <p class="card-text">
            {props.description}
      </p>
    </div>
  );
}
