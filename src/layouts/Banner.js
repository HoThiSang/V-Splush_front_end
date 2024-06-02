function Banner(props ){
    const { title ,sub_title, content, image_url } = props;
  
    return (
        <>
       
                <div
                className="item"
                style={{ backgroundImage: `url(${image_url})` }}
                >
                <div className="container-fluid">
                    <div className="caption bg-color vertical-center text-left">
                    <div className="slider-header fadeInDown-1">
                        {title}
                    </div>
                    <div className="big-text fadeInDown-1">{sub_title}</div>
                    <div className="excerpt fadeInDown-2 hidden-xs">
                        <span>{content}</span>
                    </div>
                    <div className="button-holder fadeInDown-3">
                        {/* <a
                        href="/categories"
                        className="btn-lg btn btn-uppercase btn-primary shop-now-button"
                        >
                        Shop Now
                        </a> */}
                    </div>
                    </div>
                </div>
                </div>
    </>
    );
}


export default Banner ;