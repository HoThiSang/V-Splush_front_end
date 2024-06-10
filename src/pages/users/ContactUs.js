import { Alert } from "antd";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import axiosService from "../../services/configAxios";
import { useNavigate } from "react-router";
import { Modal } from "antd";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUer] = useState({});
  const navigate =useNavigate()
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
     setUer(user);
    }
  }, []);

  const handleSetname = (e) => {
    setName(e.target.value);
  };
  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmitContact = async (e) => {
    e.preventDefault();
    if(user.id){
    try {
      const response = await axiosService.post("/user/user-send-contact", {
        name,
        email,
        subject,
        message,
      },{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
     
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setSuccessMessage('Send mail successfully!');
      setIsSuccessModalVisible(true);
      
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
        setIsErrorModalVisible(true);
      } else {
        setErrorMessage('An error occurred. Please try again later.');
        setIsErrorModalVisible(true);
      }
    }}else{
      navigate('/login')
    }
  };

  return (
    <>
      <Alert
        description="We Are Ready To Assist
You In 24/7"
        type="info"
        className="alert-contact-us"
      />
      <div className="container">
        <div className="row">
          <div className="col-11">
            <div className="col-lg-5 background-contact-us"></div>
            <div className="col-lg-4">
              <div className="image-contact-us">
                <img
                  src=" https://www.espamob.com/wp-content/uploads/2023/08/cosmetique-400x400.jpeg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="col-lg-2"></div>
              <div className="col-lg-10">
                <div className="body-contact-us">
                  <div className="col-lg-12">
                    <h2>We are here to help you always...</h2>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, buying to many desktop publishing packages.
                    </p>
                  </div>
                  <div className="col-lg-12">
                    <div className="infor-contact-us">
                      <div className="col-lg-2">
                        <div className="icon-contact-us">
                          <i
                            className="fa fa-home fa-2x i-contact-us"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className="content-contact-us">
                          <h4>Address:</h4>
                          <h6>99 Tô Hiến Thành- Sơn Trà- Đà Nẵng</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="infor-contact-us">
                      <div className="col-lg-2">
                        <div className="icon-contact-us">
                          <i
                            className="fa fa-envelope-o fa-2x i-contact-us"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className="content-contact-us">
                          <h4>Email:</h4>
                          <h6>codequeens@gmail.com</h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="infor-contact-us">
                      <div className="col-lg-2">
                        <div className="icon-contact-us">
                          <i
                            className="fa fa-phone fa-2x i-contact-us"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className="content-contact-us">
                          <h4>Call Us:</h4>
                          <h6>+84 094 - 6928 - 517</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="inputs-contact-us">
        <h2>Contact</h2>
        <p className="p-text">
          There are many variations of passages of Lorem Ipsum available, <br />
          but the majority have suffered alteration in some form.
        </p>
        <div className="input-infor-contact-us">
          <form onSubmit={handleSubmitContact}>
            <div className="iput-group-contact-us">
              <i class="fa fa-user " aria-hidden="true"></i>
              <input
                type="text"
                placeholder="Name"
                className="input-infor"
                value={name}
                onChange={handleSetname}
              />
            </div>
            <div className="iput-group-contact-us">
              <i class="fa fa-envelope-o " aria-hidden="true"></i>
              <input
                type="email"
                placeholder="Email"
                className="input-infor"
                value={email}
                onChange={handleSetEmail}
              />
            </div>
            <div className="iput-group-contact-us">
              <i class="fa fa-contao" aria-hidden="true"></i>
              <input
                type="text"
                placeholder="Subject"
                className="input-infor"
                value={subject}
                onChange={handleSubject}
              />
            </div>
            <div className="iput-group-contact-us">
              <i
                className="fa fa-commenting-o icon-commenting-o"
                aria-hidden="true"
              ></i>
              <textarea
                className="input-infor"
                placeholder="
            Any Note For Us"
                value={message}
                onChange={handleMessage}
              />
            </div>
            <div className="button-contact-us">
              <Button
                className={"btn-primary"}
                title={"SUBMIT"}
                width={"300px"}
              />
            </div>
          </form>
        </div>
      </div>
      <Modal  className="error"
          title="Error"
          open={isErrorModalVisible}
          onOk={() => setIsErrorModalVisible(false)}
          onCancel={() => setIsErrorModalVisible(false)}
        >
          <p>{errorMessage}</p>
        </Modal>
        <Modal
          title="Success"
          open={isSuccessModalVisible}
          onOk={() => setIsSuccessModalVisible(false)}
          onCancel={() => setIsSuccessModalVisible(false)}
        >
          <p>{successMessage}</p>
        </Modal>
    </>
  );
}

export default ContactUs;
