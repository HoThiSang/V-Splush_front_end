import axios from "axios";
import { Alert } from "antd";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import axiosService from "../../services/configAxios";

function ContactUs() {
  const [name,setName] =useState("")
  const [email,setEmail]=useState("")
  const [subject,setSubject]=useState("")
  const [message,setMessage]=useState("")
  const [user,setUser]=useState({});
  const [user_id]=useState("1")


  const handleSetname=(e) =>{
    setName(e.target.value)
  };
  const handleSetEmail=(e) =>{
    setEmail(e.target.value)
  }
  const handleSubject=(e) =>{
    setSubject(e.target.value)
  }
  const handleMessage=(e) =>{
    setMessage(e.target.value)
  }
  const handleSubmitContact= async (e)=>{
    e.preventDefault()
    setUser(() => ({
      name:name,
      email:email,
      subject:subject,
      message:message,
      user_id:user_id,
    }));
    console.log(user)
        try {
          const response = await axiosService.post("/user-send-contact",user);
          console.log(response.data); 
        } catch (error) {
          console.error("Error fetching email data:", error);
        }
      };

  return (

    <>
      <Alert
        description="We Are Ready To Assist
You In 24/7"
        type="info"
      />
      <div className="background-contact-us"></div>
      <div className="container">
      <div className="row">
        <div className="col"></div>
      </div>
        <div className="contact-us">
          <div className="image-contact-us">
            <img
              src=" https://www.espamob.com/wp-content/uploads/2023/08/cosmetique-400x400.jpeg"
              alt=""
            />
          </div>
          <div className="body-contact-us">
            <h2>We are here to help you always...</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, buying to
              many desktop publishing packages.
            </p>
            <div className="infor-contact-us">
              <div className="icon-contact-us">
                <i
                  className="fa fa-home fa-2x i-contact-us"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="content-contact-us">
                <h4>Address:</h4>
                <h6>99 Tô Hiến Thành- Sơn Trà- Đà Nẵng</h6>
              </div>
            </div>

            <div className="infor-contact-us">
              <div className="icon-contact-us">
                <i
                  className="fa fa-envelope-o fa-2x i-contact-us"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="content-contact-us">
                <h4>Email:</h4>
                <h6>codequeens@gmail.com</h6>
              </div>
            </div>

            <div className="infor-contact-us">
              <div className="icon-contact-us">
                <i
                  className="fa fa-phone fa-2x i-contact-us"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="content-contact-us">
                <h4>Call Us:</h4>
                <h6>(+84) 094 - 6928 - 517</h6>
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
            <i class="fa fa-user fa-2x" aria-hidden="true"></i>
            <input type="text" placeholder="Name" className="input-infor" value={name} onChange={handleSetname}/>
          </div>
          <div className="iput-group-contact-us">
            <i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
            <input type="text" placeholder="Email" className="input-infor" value={email} onChange={handleSetEmail}/>
          </div>
          <div className="iput-group-contact-us">
            <i class="fa fa-phone fa-2x" aria-hidden="true"></i>
            <input type="text" placeholder="Subject" className="input-infor" value={subject} onChange={handleSubject}/>
          </div>
          <div className="iput-group-contact-us">
            <i class="fa fa-sticky-note-o fa-3x" aria-hidden="true" ></i>
            <textarea
              className="input-infor"
              aria-label="With textarea"
              defaultValue={""}
              placeholder="Any Note For Us"
              value= {message} onChange={handleMessage}
            />
          </div>
          <div className="button-contact-us">
            <Button className={'btn-primary'} title={'SUBMIT'} width={"300px"}/>
          </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
