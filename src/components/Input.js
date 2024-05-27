const Input = () => {
  return (
    <div className="form-group mb-3 col-md-6">
      <label htmlFor="username" className="form-label">
        User name:
      </label>
      <input
        type="text"
        className="form-control"
        id="username"
        name="username"
        value=""
      />
    </div>
  );
};

export default Input;
