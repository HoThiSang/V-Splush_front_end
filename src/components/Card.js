const Card = () => {
  // const { product_name, image_url, image_name } = props;
  return (
  
            <div className="item">
                <div className="blog-post">
                    <div className="blog-post-image">
                        <div className="image"> <a href="#!"><img src="assets\images\blog-post\post1.jpg" alt="" /></a> </div>
                    </div>
                    <div className="blog-post-info text-left">
                        <h3 className="name"><a href="#!">Voluptatem accusantium doloremque laudantium</a>
                        </h3>
                        <span className="info">By Jone Doe &nbsp;|&nbsp; 21 March 2016 </span>
                        <p className="text">Sed quia non numquam eius modi tempora incidunt ut labore et dolore
                            magnam aliquam quaerat voluptatem.</p>
                        <a href="#!" className="lnk btn btn-primary">Read more</a>
                    </div>

                </div>
            </div>
  
  );
};

export default Card;
