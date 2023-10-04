import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="contact-widget-wrapper">
              <div className="main-title">
                <h2>Contact Us</h2>
                <p>
                  Do you have business for us? connect with on on the following
                  or find us in our office.
                </p>
              </div>
              <div className="contact-widget-block">
                <h3 className="title">Call us On</h3>
                <p>+256778089708</p>
              </div>
              <div className="contact-widget-block">
                <h3 className="title">Email us</h3>
                <p>kanlyteug@mail.com</p>
                <p>kanlytesupport@mail.com</p>
              </div>
              <div className="contact-widget-block">
                <h3 className="title">Our Address</h3>
                <p>1 st Street Kampala,</p>
                <p>plot 135, Uganda</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="contact-form">
              <h3 className="form-title">Leave a message here</h3>
              <form
                className="form"
                method="post"
                action="https://demo.graygrids.com/themes/craft/assets/mail/mail.php"
              >
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input
                        name="name"
                        type="text"
                        placeholder="Name*"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input
                        name="email"
                        type="email"
                        placeholder="Email*"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input
                        name="subject"
                        type="text"
                        placeholder="Subject*"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input
                        name="phone"
                        type="text"
                        placeholder="Phone*"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        placeholder="Message*"
                        name="message"
                        id="message-area"
                        className="form-control"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="button">
                      <button type="submit" class="btn ">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
