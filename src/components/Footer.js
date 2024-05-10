import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="footer color-bg">
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="module-heading">
                <h4 className="module-title">Contact Us</h4>
              </div>

              <div className="module-body">
                <ul className="toggle-footer">
                  <li className="media">
                    <div className="pull-left"> <span className="icon fa-stack fa-lg"> <i className="fa fa-map-marker fa-stack-1x fa-inverse"></i> </span> </div>
                    <div className="media-body">
                      <p>Tồ Hiến Thành, Đà Nẵng</p>
                    </div>
                  </li>
                  <li className="media">
                    <div className="pull-left"> <span className="icon fa-stack fa-lg"> <i className="fa fa-mobile fa-stack-1x fa-inverse"></i> </span> </div>
                    <div className="media-body">
                      <p>+(84) 390 465 234<br />+(84) 276 611 133</p>
                    </div>
                  </li>
                  <li className="media">
                    <div className="pull-left"> <span className="icon fa-stack fa-lg"> <i className="fa fa-envelope fa-stack-1x fa-inverse"></i> </span> </div>
                    <div className="media-body"> <span><a href="mailto:v_splushcometics@gmail.com">v_splushcometics@gmail.com</a></span> </div>
                  </li>
                </ul>
              </div>

            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="module-heading">
                <h4 className="module-title">Customer Service</h4>
              </div>

              <div className="module-body">
                <ul className='list-unstyled'>
                  <li className="first"><a href="#" title="Contact us">My Account</a></li>
                  <li><a href="#" title="About us">Order History</a></li>
                  <li><a href="#" title="faq">FAQ</a></li>
                  <li><a href="#" title="Popular Searches">Specials</a></li>
                  <li className="last"><a href="#" title="Where is my order?">Help Center</a></li>
                </ul>
              </div>

            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="module-heading">
                <h4 className="module-title">Corporation</h4>
              </div>

              <div className="module-body">
                <ul className='list-unstyled'>
                  <li className="first"><a title="Your Account" href="#">About us</a></li>
                  <li><a title="Information" href="#">Customer Service</a></li>
                  <li><a title="Addresses" href="#">Company</a></li>
                  <li><a title="Addresses" href="#">Investor Relations</a></li>
                  <li className="last"><a title="Orders History" href="#">Advanced Search</a></li>
                </ul>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="module-heading">
                <h4 className="module-title">Why Choose Us</h4>
              </div>

              <div className="module-body">
                <ul className='list-unstyled'>
                  <li className="first"><a href="#" title="About us">Shopping Guide</a></li>
                  <li><a href="#" title="Blog">Blog</a></li>
                  <li><a href="#" title="Company">Company</a></li>
                  <li><a href="#" title="Investor Relations">Investor Relations</a></li>
                  <li className=" last"><a href="contact-us.html" title="Suppliers">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-bar">
        <div className="container">
          <div className="col-xs-12 col-sm-6 no-padding social">
            <ul className="link">
              <li className="fb pull-left"><a target="_blank" rel="nofollow" href="#" title="Facebook"></a></li>
              <li className="tw pull-left"><a target="_blank" rel="nofollow" href="#" title="Twitter"></a></li>
              <li className="googleplus pull-left"><a target="_blank" rel="nofollow" href="#" title="GooglePlus"></a></li>
              <li className="rss pull-left"><a target="_blank" rel="nofollow" href="#" title="RSS"></a></li>
              <li className="pintrest pull-left"><a target="_blank" rel="nofollow" href="#" title="PInterest"></a></li>
              <li className="linkedin pull-left"><a target="_blank" rel="nofollow" href="#" title="Linkedin"></a></li>
              <li className="youtube pull-left"><a target="_blank" rel="nofollow" href="#" title="Youtube"></a></li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-6 no-padding">
            <div className="clearfix payment-methods">
              <ul>
                <li><img src="assets/images/payments/1.png" alt="" /></li>
                <li><img src="assets/images/payments/2.png" alt="" /></li>
                <li><img src="assets/images/payments/3.png" alt="" /></li>
                <li><img src="assets/images/payments/4.png" alt="" /></li>
                <li><img src="assets/images/payments/5.png" alt="" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
