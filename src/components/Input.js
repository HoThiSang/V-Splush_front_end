const Input = (props) => {
  const { label, type , name, value, onChangeInput } = props
  return (
    <div className="form-group mb-3 col-md-6">
      <label htmlFor={label}  className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id="username"
        name={name}
        value={value}
        onChange={onChangeInput}
      />
    </div>
  );
};

export default Input;
