import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate  } from "react-router-dom"; 
import toast, { Toaster } from 'react-hot-toast';

export const EditContact = () => {
const navigate = useNavigate();
const { id } = useParams();
const [data, setData] = useState({
    full_name: "",
    email: "",
    subject: "",
    message: ""
});

useEffect(() => {
    axios.get(`http://localhost:3001/contact/${id}`)
        .then((res) => {
            setData(res.data);
        });
}, [id]);
   
const handler = (e) => {
    const { name, value } = e.target;

    setData({
        ...data,
        [name]: value
    });
};
const updateData = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:3001/contact/${id}`, data)
        .then(() => {
            // alert("Record Updated Successfully");
            toast.success("Record Updated Successfully");
            setData({
                full_name: "",
                email: "",
                subject: "",
                message: ""
            });
            navigate("/contactlist");
        })
        .catch((err) => {
            console.log(err);
        });
};

// console.log(id);
 return (
    
    <div className="container py-5">
      <Toaster position="top-right" />
      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Contact Us</h1>
        <p className="text-muted">
          update your personal Information
        </p>
      </div>

      <div className="row g-4">

        {/* Contact Form */}
        <div className="col-lg-8">
          <div className="card shadow border-0">
            <div className="card-body p-4">

              <h3 className="mb-4">update your details </h3>

              <form onSubmit={updateData}>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      name="full_name"
                      value={data.full_name}
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
                      value={data.email}
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
                    value={data.subject}
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
                    value={data.message}
                    onChange={handler}
                  ></textarea>
                </div>

                <button type='submit' className="btn btn-primary px-4">
                  Update
                </button>

              </form>

            </div>
          </div>
        </div>
        </div>
    </div>
  );
}
