import { Alert } from "antd";
import { Button } from "../../components";

import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
      <Alert
        message="MISSION"
        description="An About Us page is a section on a website that provides information about a company, organization, or individual. It is an opportunity to tell your brand’s story, share your vision, history, values, and achievements, and introduce team members. This is where you build trust and credibility with customers."
        type="info"
        className="alert-about-us"
      />

      <div className="container">
        <div className="row  value-about-us">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="col-lg-12 content-about-us">
              <h3 className="title-about-us">The work values we thrive for</h3>
              <div className="col-lg-2 img-border-about-us">
                <img
                  src="https://res.cloudinary.com/dt8km1sxl/image/upload/v1716968093/V-Splush/k3dfsygjymrs67jmwsns.png"
                  alt=""
                  className="img-about-us"
                />
              </div>
              <div className="col-lg-10">
                <h4>Beauty Experts</h4>
                <p>
                  The majority have suffered alteration in some form, buying to
                  injected humour, or randomised words which desktop publishing
                  packages.
                </p>
                <hr />
              </div>
            </div>
            <div className="col-lg-12 content-about-us">
              <div className="col-lg-2 img-border-about-us">
                <img
                  src="https://res.cloudinary.com/dt8km1sxl/image/upload/v1716968028/V-Splush/xsengle8ggbbxgfpnlwa.png"
                  alt=""
                  className="img-about-us"
                />
              </div>
              <div className="col-lg-10">
                <h4>Great Services</h4>
                <p>
                  The majority have suffered alteration in some form, buying to
                  injected humour, or randomised words which desktop publishing
                  packages.
                </p>
                <hr />
              </div>
            </div>
            <div className="col-lg-12 content-about-us">
              <div className="col-lg-2 img-border-about-us">
                <img
                  src="https://res.cloudinary.com/dt8km1sxl/image/upload/v1716968292/V-Splush/o2d6nxccri0pvli2usmt.png"
                  alt=""
                  className="img-about-us"
                />
              </div>
              <div className="col-lg-10">
                <h4>100% Genuine</h4>
                <p>
                  The majority have suffered alteration in some form, buying to
                  injected humour, or randomised words which desktop publishing
                  packages.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
        <div className="row amazing-about-us">
          <h2 className="title-about-us">
            The amazing women behind Beautyness
          </h2>
          <div className="col-sm-4 col-md-4 col-lg-2"></div>
          <div className="col-sm-4 col-md-4 col-lg-3">
            <div className="card card-about-us">
              <img
                src="https://res.cloudinary.com/dt8km1sxl/image/upload/v1716937833/V-Splush/h5w98cg2csbnyyru9ixg.jpg"
                className="card-img-top imgcrop"
                alt="..."
              />
              <div className="card-body name-card-body">
                <h4 className="card-title name-card-title">HỒ THỊ SANG</h4>
                <h4 className="card-title name-about-us">Beautyness Expert</h4>
                <p className="card-text contain-about-us">
                  I must explain to you how all this mistaken idea of denouncing
                  pleasure that will araise praising pain
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-3">
            <div className="card card-about-us">
              <img
                src="https://res.cloudinary.com/dt8km1sxl/image/upload/v1716937833/V-Splush/myxo1esvricg1hei01yq.jpg"
                class="card-img-top imgcrop"
                alt="..."
              />
              <div className="card-body name-card-body">
                <h4 className="card-title name-card-title">HỒ MAI HUYỀN</h4>
                <h4 className="card-title name-about-us">Beautyness Expert</h4>
                <p className="card-text contain-about-us">
                  I must explain to you how all this mistaken idea of denouncing
                  pleasure that will araise praising pain
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-3 ">
            <div className="card card-about-us">
              <img
                src="https://res.cloudinary.com/dt8km1sxl/image/upload/v1717242582/V-Splush/diwhfddqlnnfzqsxpkja.jpg"
                className="card-img-top imgcrop"
                alt="..."
              />
              <div className="card-body name-card-body">
                <h4 className="card-title name-card-title">PHẠM THỊ HỈ</h4>
                <h4 className="card-title name-about-us">Beautyness Expert</h4>
                <p className="card-text contain-about-us">
                  I must explain to you how all this mistaken idea of denouncing
                  pleasure that will araise praising pain
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-2"></div>
          <div className="col-sm-4 col-md-1 col-lg-1 margin-abou-us"></div>

          <div className="col-sm-4 col-md-4 col-lg-3">
            <div className="card card-about-us">
              <img
                src="https://res.cloudinary.com/dt8km1sxl/image/upload/v1716937833/V-Splush/fi9d2gnrj8g4av16vmrv.jpg"
                className="card-img-top imgcrop"
                alt="..."
              />
              <div className="card-body name-card-body">
                <h4 className="card-title name-card-title">
                  TRẦN PHAN THANH VÂN
                </h4>
                <h4 className="card-title name-about-us">Beautyness Expert</h4>
                <p className="card-text contain-about-us">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 ">
            <div className="card card-about-us">
              <img
                src="https://res.cloudinary.com/dt8km1sxl/image/upload/v1716937833/V-Splush/gltphkjhlyslwufuuwlm.jpg"
                className="card-img-top imgcrop"
                alt="..."
              />
              <div className="card-body name-card-body">
                <h4 className="card-title name-card-title ">NGUYỄN THỊ LINH</h4>
                <h4 className="card-title name-about-us">Beautyness Expert</h4>
                <p className="card-text contain-about-us">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row background-comment-about-us">
          <h3 className="title-about-us">What our Customers says...</h3>
          <div className="row">
            <div className="col-md-6 col-lg-2"></div>

            <div className="col-sm-6 col-md-6 col-lg-4 comment-about-us">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    “ It is a long established fact that a reader will be
                    tracked distracted by the readable content of a page is when
                    looking at its layout. The point of using Lorem of
                    distribution it look like readable English “
                  </p>
                  <div className="card">
                    <div className="row img-customer-about-us">
                      <div className="col-sm-4 col-md-2">
                        <img
                          src="https://res.cloudinary.com/dt8km1sxl/image/upload/v1716938309/V-Splush/vu1f93mwq6qcrfz8e7s1.jpg"
                          className="img-fluid rounded-start image-customer-about-us"
                          alt="..."
                        />
                      </div>
                      <div className="col-sm-8 col-md-6 both-name-customer">
                        <p className="card-title name-customer">
                          James Williams
                        </p>
                        <p className="card-text name-customer">United States</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 comment-about-us">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    “ It is a long established fact that a reader will be
                    tracked distracted by the readable content of a page is when
                    looking at its layout. The point of using Lorem of
                    distribution it look like readable English “
                  </p>

                  <div className="card">
                    <div className="row img-customer-about-us">
                      <div className="col-sm-4 col-md-2">
                        <img
                          src="https://res.cloudinary.com/dt8km1sxl/image/upload/v1716938309/V-Splush/r5iruceq7h4ykdlnk1gx.jpg"
                          className="img-fluid rounded-start image-customer-about-us"
                          alt="..."
                        />
                      </div>
                      <div className="col-sm-8 col-md-6 ">
                        <p className="card-title name-customer">Lieo Jessica</p>
                        <p className="card-text name-customer">
                          United Kingdom
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2"></div>
          </div>
        </div>

        <div className="row background-location-about-us">
          <div className="col-lg-2"></div>
          <div className="col-lg-4">
            <h4 className="title-location-about-us">LOCATION</h4>
            <h3>
              Come visit our store and experience the difference for yourself!
            </h3>
            <div className="col-lg-12 come-visit-about-us">
              <div className="col-lg-6">
                <h5 className="title-come-visit-about-us">MAIL US:</h5>
                <h6>codequeens@gmail.com</h6>
                <h5 className="title-come-visit-about-us">CALL US:</h5>
                <h6>(+84) 094 - 6928 - 517</h6>
              </div>
              <div className="col-lg-6 address-visit-about-us">
                <h5>ADDRESS</h5>
                <h5>99 TO HIEN THANH, DA NANG</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.1213077702782!2d108.2409344745998!3d16.05919363970754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142177ed575157d%3A0xa54585cda5d67ac7!2zOTkgVMO0IEhp4bq_biBUaMOgbmgsIFBoxrDhu5tjIE3hu7ksIFPGoW4gVHLDoCwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1715662391242!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="google-map"
            ></iframe>
          </div>
          <div className="col-lg-12">
            <Link to="/contact-us">
              <Button className="btn-primary btn-about-us" title="CONTACT US" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
