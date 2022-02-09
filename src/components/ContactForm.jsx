import { Modal, Button, ListGroup } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import React, { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const form = useRef();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_68upaqg",
        "template_8nazwnm",
        e.target,
        "user_qXCz377WT7xCIcOYZ5vun"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("Thank you! We will contact you soon.");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "bg-success",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          // Default options for specific types
          success: {
            iconTheme: {
              primary: "red",
              secondary: "white",
            },
          },
        }}
      />
      <div className="container">
        <div className="row pt-5 mx-auto col-lg-6">
          <div className="row mx-auto mb-5">
            <div className="col-sm-12 col-md-3 col-lg-3">
              <img
                src="assets/images/profile-photo.jpg"
                alt="logo"
                className="img-fluid rounded-circle"
                width={150}
              />
            </div>

            <div className="col-sm-12 col-md-9 col-lg-9">
              <span className="fw-bold text-white" style={{ fontSize: "30px" }}>
                Talha Shabbir
              </span>
              <span
                className="text-warning d-block"
                style={{ fontSize: "12px" }}
              >
                FLP Upcoming Supervisor | Young Entrepreneur | Social Media
                Expert
              </span>

              <button
                onClick={handleShow}
                className="btn btn-warning btn-sm mt-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Profile <i className="bi bi-eye-fill"></i>
              </button>

              {/* profile modal */}
              <Modal show={show} onHide={handleClose}>
                {/* <Modal.Header closeButton>
                  <Modal.Title>Mr. Talha Shabbir</Modal.Title>
                </Modal.Header> */}
                <Modal.Body className="bg-dark">
                  <ListGroup>
                    <ListGroup.Item>
                      <strong>
                        <i className="bi bi-envelope-fill"></i>{" "}
                      </strong>
                      <a
                        href="mailto:talhasulehri0786@gmail.com"
                        target="_blank"
                      >
                        talhasulehri0786@gmail.com
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>
                        <i className="bi bi-phone-fill"></i>{" "}
                        <i className="bi bi-whatsapp"></i>{" "}
                      </strong>
                      <a href="https://wa.me/+923040606398" target="_blank">
                        0304-0606398
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>
                        <i className="bi bi-facebook"></i>{" "}
                      </strong>
                      <a
                        href="https://www.facebook.com/talha.sulehri.71"
                        target="_blank"
                      >
                        talha.sulehri.71
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>
                        <i className="bi bi-linkedin"></i>{" "}
                      </strong>
                      <a
                        href="https://www.linkedin.com/in/talha-shabbir-656255219/"
                        target="_blank"
                      >
                        talha-shabbir-656255219
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>
                        <i className="bi bi-instagram"></i>{" "}
                      </strong>
                      <a
                        href="https://www.instagram.com/talha_shabbir47/"
                        target="_blank"
                      >
                        @talha_shabbir47
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      ❤️Talha Shabbir❤️ <br />
                      🏅𝐘𝐎𝐔𝐍𝐆 𝐄𝐍𝐓𝐑𝐄𝐏𝐑𝐄𝐍𝐄𝐔𝐑🇵🇰 <br />
                      💙𝖂𝖎𝖘𝖍 𝖒𝖊 𝖔𝖓 22𝕵𝖚𝖓𝖊💙 <br />
                      𝕄𝕒𝕜𝕖 💰 𝕄𝕠𝕟𝕖𝕪 𝕆𝕟 𝕊𝕠𝕔𝕚𝕒𝕝 🌎𝕄𝕖𝕕𝕚𝕒💵
                      <br />
                    </ListGroup.Item>
                  </ListGroup>
                  <Button
                    className="btn-sm w-100 mt-3"
                    variant="warning"
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                </Modal.Body>
              </Modal>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="col-lg-12 col-md-12 form-group mx-auto">
              <div
                className="alert alert-info py-1"
                role="alert"
                style={{ textAlign: "left" }}
              >
                <small>
                  <i className="bi bi-info-circle-fill"></i> Please fill out the
                  form below.
                </small>
              </div>
              <div className="input-group mb-3">
                <span
                  className="input-group-text bg-dark border-1"
                  id="basic-addon1"
                >
                  <i className="bi bi-person-fill text-warning"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  aria-label="Name"
                  aria-describedby="basic-addon1"
                  name="name"
                  required
                />
              </div>
              <div className="input-group mb-3">
                <span
                  className="input-group-text bg-dark border-1"
                  id="basic-addon1"
                >
                  <i className="bi bi-envelope-fill text-warning"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  name="email"
                  required
                />
              </div>
              <div className="input-group mb-3">
                <span
                  className="input-group-text bg-dark border-1"
                  id="basic-addon1"
                >
                  <i className="bi bi-phone-fill text-warning"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  aria-label="Phone"
                  aria-describedby="basic-addon1"
                  name="phone"
                  required
                />
              </div>
              <div className="input-group mb-3">
                <span
                  className="input-group-text bg-dark border-1"
                  id="basic-addon1"
                >
                  <i className="bi bi-mortarboard-fill text-warning"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Education"
                  aria-label="Education"
                  aria-describedby="basic-addon1"
                  name="education"
                  required
                />
              </div>
              <div className="input-group mb-3">
                <span
                  className="input-group-text bg-dark border-1"
                  id="basic-addon1"
                >
                  <i className="bi bi-building text-warning"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  aria-label="City"
                  aria-describedby="basic-addon1"
                  name="city"
                  required
                />
              </div>
              <div className="input-group mb-3">
                <span
                  className="input-group-text bg-dark border-1"
                  id="basic-addon1"
                >
                  <i className="bi bi-gender-ambiguous text-warning"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Gender"
                  aria-label="Gender"
                  aria-describedby="basic-addon1"
                  name="gender"
                  required
                />
              </div>
              <div className="input-group mb-3">
                <span
                  className="input-group-text bg-dark border-1"
                  id="basic-addon1"
                >
                  <i className="bi bi-person-bounding-box text-warning"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Age"
                  aria-label="Age"
                  aria-describedby="basic-addon1"
                  name="age"
                  required
                />
              </div>
            </div>

            <div className="col-lg-12 col-md-12 pt-3 mx-auto d-flex justify-content-end mb-5">
              <button type="submit" className="btn btn-warning fw-bold w-100">
                Submit <i className="bi bi-send"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
