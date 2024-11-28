import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Index = () => {
  useEffect(() => {
    const text =
      "SMARTSHOP helps you manage your shop efficiently, from generating bills to tracking income.";
    const typingElement = document.getElementById("typing-text");
    let index = 0;
    let typingTimeout;
  
    // Clear the text content before starting
    typingElement.textContent = "";
  
    const type = () => {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        typingTimeout = setTimeout(type, 20); // Typing speed
      }
    };
  
    type();
  
    // Cleanup to clear timeouts if the component unmounts
    return () => clearTimeout(typingTimeout);
  }, []);
  
  

  return (
    <div>
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
        </ul>
      </div>

      <header>
        <nav className="navbar">
          <div className="container">
            <img src="/assets/logos.png" alt="Logo" />
            <ul>
              <li>
                <Link to="/">Home</Link> 
              </li>
              <li>
                <Link to="/about">About</Link> 
              </li>
              <li>
                <a href="/#services">Services</a> 
              </li>
              <li>
                <Link to="/contact">Contact Us</Link> 
              </li>
            </ul>
            <div id="button">
              <Link to="/login" className="btn btn-primary loginBtn"> 
                Login
              </Link>
              <Link to="/register" className="btn btn-primary registerBtn"> 
                Register
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">Business became more easy</h1>
          <h2>
            with{" "}
            <span style={{ color: "rgb(211, 5, 5)" }}>SMART</span>
            <span style={{ color: "black" }}>SHOP</span>
          </h2>
          <p id="typing-text"></p>
          <Link to="/register" className="btn btn-primary cta-btn"> {/* Updated to correct route */}
            Get Started
          </Link>
          <div  id="services"></div>
          <div className="additional-content" id="services">
            <div>Billing & Accounting for all businesses</div>
            <div>Sales and purchase accounting</div>
            <div>Easy bill creation</div>
            <div>Stock management Digitally</div>
          </div>
        </div>
      </div>

      <section className="section2" id="section2">
        <div className="section2Div">
          <h1>Built with features for</h1>
          <h1>growing businesses</h1>
          <br />
        </div>
        <div className="features">
          <h2>GST & Non-GST Bills</h2>
          <ul>
            <li>Create customized invoices & easily share with customers</li>
            <li>Custom fields like Vehicle No, PO No, etc.</li>
            <li>Detailed sales and purchase reports</li>
            <li>No double-entry across khata and cashbook</li>
          </ul>
        </div>
        <div class="features">
       <h2>Inventory Management</h2>
            <ul>
                <li>Track your stock in/out and profits</li>
                <li>Detailed stock history with sale & purchase price with notes</li>
                <li>Low stock tracking</li>
                <li>Profit tracking at daily, weekly and monthly level</li>
            </ul>
        </div>
    <div class="features">
       
            <h2>Track your business growth</h2>
            <ul>
                <li>Use Khatabook across different devices</li>
                <li>Data synced across mobile and desktop devices</li>
                <li>Use Khatabook in both online and offline mode (Coming Soon)</li>
             
            </ul>
</div>
    <div class="features">
       
            <h2>Business management on the go</h2>
            <ul>
                <li>Use Khatabook across different devices</li>
                <li>Data synced across mobile and desktop devices</li>
                <li>Use Khatabook in both online and offline mode (Coming Soon)</li>
</ul>
</div>
      </section>

      <section>
        <div className="container mt-4 p-4 bg-white conclusion">
          <h1 className="display-3">Get started with</h1>
          <h1>
            <span style={{ color: "rgb(211, 5, 5)" }}>
              <b>SMART</b>
            </span>
            <span style={{ color: "black" }}>
              <b>SHOP</b>
            </span>
          </h1>
          <p>
            MyShopManager helps you manage your shop efficiently, from
            generating bills to tracking income.
          </p>
          <Link to="/register" className="btn btn-primary cta-btn"> {/* Updated to correct route */}
            Get Started
          </Link>
        </div>
      </section>

      <footer id="contact" className="company-info">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto text-center">
              <h3>Contact Us</h3>
              <p>
                <strong>Phone:</strong> +91-9606800800
              </p>
              <p>
                <strong>Email:</strong> contact@myshopmanager.com
              </p>
              <p>
                <strong>Address:</strong> 123 Business Street, City, Country
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center social-icons">
              <Link to="#" className="fab fa-facebook-f"></Link> {/* Updated to correct route */}
              <Link to="#" className="fab fa-twitter"></Link> {/* Updated to correct route */}
              <Link to="#" className="fab fa-instagram"></Link> {/* Updated to correct route */}
              <Link to="#" className="fab fa-linkedin-in"></Link> {/* Updated to correct route */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
