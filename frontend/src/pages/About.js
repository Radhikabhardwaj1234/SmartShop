import React from "react";
// import "../project.css"; // Assuming project.css is globally applied
// import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css";

const About = () => {
  return (
    <>
      {/* Background */}
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      {/* Header */}
      <header>
        <nav className="navbar">
          <div className="container">
            <img src="/assets/logos.png" alt="Logo" />
            <ul>
              <li><a href="/">Home</a></li>
              {/* <li><a href="/about">About</a></li> */}
              {/* <li><a href="/#services">Services</a></li> */}
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* About Section */}
      <div className="container pt-4">
        <h1 className="text-center mb-5">About Us</h1>

        {/* Who We Are */}
        <div className="cardAbout shadow-lg p-4">
          <h4 className="text-center mb-4">Who We Are</h4>
          <p>
            Welcome to our <strong>Shop Management System</strong> — a platform built with the vision of simplifying the daily challenges faced by shopkeepers. Our solution is designed to cater to small and medium-sized businesses, providing a seamless experience for managing inventory, billing, dues, and income tracking. Whether you manage a grocery store, boutique, or hardware shop, our platform adapts to your needs effortlessly.
          </p>
          <p>
            We believe in empowering businesses with technology that is both practical and easy to use, ensuring shopkeepers can focus on what matters most — growing their business.
          </p>
        </div>

        {/* Our Features */}
        <div className="cardAbout shadow-lg p-4 mt-4">
          <h4 className="text-center mb-4">Our Features</h4>
          <ul>
            <li><strong>Billing System:</strong> Quickly create invoices with accurate details, ensuring faster and smoother transactions.</li>
            <li><strong>Dues Management:</strong> Track and manage customer dues with options for partial payments and easy updates.</li>
            <li><strong>Stock Management:</strong> Monitor inventory levels in real-time, update stock dynamically, and prevent overstocking or shortages.</li>
            <li><strong>Income Tracking:</strong> View income trends with dynamic charts filtered by date, year, or overall progress.</li>
            <li><strong>Secure Backend:</strong> Built on MongoDB, ensuring reliable and safe data storage for all operations.</li>
            <li><strong>Consistent Design:</strong> A uniform theme across all pages provides an intuitive and user-friendly experience.</li>
          </ul>
        </div>

        {/* Our Mission */}
        <div className="cardAbout shadow-lg p-4 mt-4">
          <h4 className="text-center mb-4">Our Mission</h4>
          <p>
            Our mission is to revolutionize shop management by offering a simple yet powerful platform that handles all your operational needs. We aim to free shopkeepers from mundane, time-consuming tasks and enable them to focus on growing their businesses.
          </p>
          <p>
            By integrating tools for billing, dues, inventory, and income tracking into one platform, we provide shopkeepers with the insights and control they need to succeed in today’s competitive market.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="cardAbout shadow-lg p-4 mt-4">
          <h4 className="text-center mb-4">Why Choose Us?</h4>
          <p>
            With so many options available, here’s why shopkeepers trust our platform:
          </p>
          <ul>
            <li><strong>User-Centric Design:</strong> Designed for shopkeepers, with simplicity and ease of use in mind.</li>
            <li><strong>End-to-End Solution:</strong> From billing to inventory and income tracking, everything is in one place.</li>
            <li><strong>Real-Time Updates:</strong> Stay updated with the latest information and insights about your business.</li>
            <li><strong>Secure and Reliable:</strong> Your data is safe with us, thanks to a secure backend powered by MongoDB.</li>
            <li><strong>Scalable Platform:</strong> Whether you run a small shop or a large retail chain, our system scales to meet your needs.</li>
          </ul>
          <p>
            Our goal is to make your business operations smoother, faster, and more efficient. Join hundreds of shopkeepers who have transformed their businesses with our Shop Management System.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
