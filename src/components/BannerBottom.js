const BannerButton = (props) => {
  const {title, sub_title} = props;
return (
  <div className="col-md-6 col-sm-4 col-lg-4">
    <div className="info-box">
      <div className="row">
        <div className="col-xs-12">
          <h4 className="info-box-heading green">{title}</h4>
        </div>
      </div>
      <h6 className="text">{sub_title}</h6>
    </div>
  </div>
);
};

export default BannerButton