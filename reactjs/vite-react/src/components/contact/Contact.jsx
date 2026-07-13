import React, { useState } from "react";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export const Contact = () => {
  const [data, setData] = useState({
    full_name : '',
    email : '',
    subject: '',
    message: ''
  })

  const handler = (event) => {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.value);
    
    const {name, value } = event.target;

    // console.log(name + " " + value);
    
    setData({ ...data, [name] : value})
  }


  const saveFromData = (e) => {
    e.preventDefault()
    console.log(data);
    axios.post("http://localhost:3001/contact",data)
  }
  return (
    <div className="container py-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Contact Us</h1>
        <p className="text-muted">
          We'd love to hear from you. Send us a message and we'll respond as
          soon as possible.
        </p>
      </div>

      <div className="row g-4">

        {/* Contact Form */}
        <div className="col-lg-8">
          <div className="card shadow border-0">
            <div className="card-body p-4">

              <h3 className="mb-4">Send a Message</h3>

              <form onSubmit={saveFromData}>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      name="full_name"
                      onChange={handler}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      name="email"
                      onChange={handler}
                    />
                  </div>

                </div>

                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter subject"
                    name="subject"
                    onChange={handler}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    rows="5"
                    className="form-control"
                    placeholder="Write your message..."
                    name="message"
                    onChange={handler}
                  ></textarea>
                </div>

                <button className="btn btn-primary px-4">
                  Send Message
                </button>

              </form>

            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="col-lg-4">

          <div className="card shadow border-0 mb-4">
            <div className="card-body">

              <h4 className="mb-4">Contact Information</h4>

              <p>
                <strong>📍 Address</strong><br />
                Lucknow, Uttar Pradesh, India
              </p>

              <p>
                <strong>📧 Email</strong><br />
                contact@myblog.com
              </p>

              <p>
                <strong>📞 Phone</strong><br />
                +91 98765 43210
              </p>

            </div>
          </div>

          {/* Social Links */}
          <div className="card shadow border-0">
            <div className="card-body">

              <h4 className="mb-3">Follow Us</h4>

              <div className="d-grid gap-2">

                <button className="btn btn-outline-primary">
                  Facebook
                </button>

                <button className="btn btn-outline-info">
                  Twitter
                </button>

                <button className="btn btn-outline-danger">
                  Instagram
                </button>

                <button className="btn btn-outline-dark">
                  GitHub
                </button>

              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Google Map Placeholder */}
      <div className="mt-5">
        <div className="card shadow border-0">
          <div className="card-body text-center bg-light">
            <h4 className="mb-3">Our Location</h4>

            <div
              className="bg-secondary text-white d-flex align-items-center justify-content-center"
              style={{ height: "300px" }}
            >
              Google Map Here
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

