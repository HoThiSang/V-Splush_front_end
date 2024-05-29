const Label = (props) => {
  const { label, idName } = props;
  return (
    <div className="form-group col-md-3">
      <label htmlFor={idName}>{label}</label>
    </div>
  );
};

export default Label;
