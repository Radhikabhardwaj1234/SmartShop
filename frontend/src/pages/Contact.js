import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS Integration
    emailjs
      .send(
        "service_9dxtjqi", // Replace with your EmailJS service ID
        "template_kagansl", // Replace with your EmailJS template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "0cLcK0I2BC4NPfklK" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setForm({ name: "", email: "", message: "" }); // Clear form after submission
        },
        (error) => {
          alert("Error sending message. Please try again.");
        }
      );
  };

  return (
    <div>
      {/* Background */}
      <div className="area">
        <ul className="circles">
          {Array(10).fill(<li></li>)}
        </ul>
      </div>

      {/* Header */}
      <header>
        <nav className="navbar">
          <div className="container">
            <img src="/assets/logos.png" alt="Logo" />
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Contact Us Section */}
      <div className="container pt-3">
        <h1 className="text-center mb-5" style={{ color: "#50d890" }}>Contact Us</h1>

        <div className="row">
          {/* Contact Information */}
          <div className="col-md-6">
            <div className="card shadow-lg p-4">
              <h4 className="text-center mb-4" style={{ color: "#50d890" }}>Get in Touch</h4>
              <div className="contact-info">
                <p><i className="fas fa-phone"></i> <strong>Phone:</strong> +91 9876543210</p>
                <p><i className="fas fa-envelope"></i> <strong>Email:</strong> support@shopmanager.com</p>
                <p><i className="fas fa-map-marker-alt"></i> <strong>Address:</strong> Shop Manager HQ, New Delhi, India</p>
                <p><i className="fas fa-clock"></i> <strong>Hours:</strong> Mon-Fri, 9 AM - 6 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <div className="card shadow-lg p-4">
              <h4 className="text-center mb-4" style={{ color: "#50d890" }}>Send Us a Message</h4>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-submit w-100 mt-4">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
