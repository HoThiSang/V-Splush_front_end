const Input = (props) => {
  const { label, type, value, onChange } = props;

  return (
    <div className="form-group mb-3 col-md-6">
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        value={value}
  
      />
    </div>
  );
};

export default Input;
