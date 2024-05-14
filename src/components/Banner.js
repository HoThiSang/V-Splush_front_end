function Banner() {
  const bannerAll = [];
    return (
        <>
        <div id="hero">
            <div id="owl-main" className="owl-carousel owl-inner-nav owl-ui-sm">
            {bannerAll.map((banner) => (
                <div
                className="item"
                style={{ backgroundImage: `url(${banner.image_url})` }}
                >
                <div className="container-fluid">
                    <div className="caption bg-color vertical-center text-left">
                    <div className="slider-header fadeInDown-1">
                        {banner.title}
                    </div>
                    <div className="big-text fadeInDown-1">{banner.title}</div>
                    <div className="excerpt fadeInDown-2 hidden-xs">
                        <span>{banner.content}</span>
                    </div>
                    <div className="button-holder fadeInDown-3">
                        <a
                        href="/categories"
                        className="btn-lg btn btn-uppercase btn-primary shop-now-button"
                        >
                        Shop Now
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        <div className="info-boxes wow fadeInUp">
            <div className="info-boxes-inner">
            <div className="row">
                <div className="col-md-6 col-sm-4 col-lg-4">
                <div className="info-box">
                    <div className="row">
                    <div className="col-xs-12">
                        <h4 className="info-box-heading green">money back</h4>
                    </div>
                    </div>
                    <h6 className="text">30 Days Money Back Guarantee</h6>
                </div>
                </div>

                <div className="hidden-md col-sm-4 col-lg-4">
                <div className="info-box">
                    <div className="row">
                    <div className="col-xs-12">
                        <h4 className="info-box-heading green">free shipping</h4>
                    </div>
                    </div>
                    <h6 className="text">Shipping on orders over $99</h6>
                </div>
                </div>
                <div className="col-md-6 col-sm-4 col-lg-4">
                <div className="info-box">
                    <div className="row">
                    <div className="col-xs-12">
                        <h4 className="info-box-heading green">Special Sale</h4>
                    </div>
                    </div>
                    <h6 className="text">Extra $5 off on all items </h6>
                </div>
                </div>
            </div>
            </div>
        </div>
    </>
    );
}


export default Banner ;