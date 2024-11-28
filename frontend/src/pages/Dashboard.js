import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Chart from "chart.js/auto";
import axios from "axios";

const Dashboard = () => {
  // Store chart instances
  let incomeChartInstance = null;
  let duesChartInstance = null;

  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:2000/logout");
      if (response.status === 200) {
        // Redirect to login or home page
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Failed to logout. Please try again.");
    }
  };

  useEffect(() => {
    // Income Chart
    const incomeCtx = document.getElementById("incomeChart").getContext("2d");

    // Destroy existing instance if it exists
    if (incomeChartInstance) {
      incomeChartInstance.destroy();
    }

    incomeChartInstance = new Chart(incomeCtx, {
      type: "line",
      data: {
        labels: ["2024-11-01", "2024-11-02", "2024-11-03", "2024-11-04", "2024-11-05"],
        datasets: [
          {
            label: "Daily Income (₹)",
            data: [500, 1000, 1500, 1200, 2000],
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            fill: true,
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: "Date",
            },
          },
          y: {
            title: {
              display: true,
              text: "Income (₹)",
            },
          },
        },
      },
    });

    // Dues Chart
    const duesCtx = document.getElementById("duesChart").getContext("2d");

    // Destroy existing instance if it exists
    if (duesChartInstance) {
      duesChartInstance.destroy();
    }

    duesChartInstance = new Chart(duesCtx, {
      type: "pie",
      data: {
        labels: ["Paid", "Pending"],
        datasets: [
          {
            data: [2000, 5000],
            backgroundColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
            borderColor: "rgba(255, 255, 255, 0.1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });

    // Cleanup on unmount
    return () => {
      if (incomeChartInstance) {
        incomeChartInstance.destroy();
      }
      if (duesChartInstance) {
        duesChartInstance.destroy();
      }
    };
  }, []);

  return (
    <div>
      {/* Background */}
      <div className="area">
        <ul className="circles">
          {Array.from({ length: 10 }).map((_, i) => (
            <li key={i}></li>
          ))}
        </ul>
      </div>
      
      <header>
      <nav className="navbar" style={{ borderRadius: "0px"}}>
                    <div className="container">
                        <img src="/assets/logos.png" alt="Logo" />
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="#contact">Contact Us</Link></li>
                            {/* <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li> */}
                        </ul>
                    </div>
                </nav>
      </header>

      <div style={{ display: "flex", width: "100% !important" }}>
        <div className="sidebar" id="menu">
          <i id="closeMenu" onClick={() => {}} className="fa fa-arrow-left" aria-hidden="true"></i>
          <div className="logo">
            <br />
            <br />
            <ul className="menu">
              {/* <li className="active">
                <Link to="/">
                  <i className="fa fa-home" aria-hidden="true"></i>
                  <span className="sidebarFont">Home</span>
                </Link>
              </li> */}
              <li>
                <Link to="/billing">
                  <i className="fas fa-file-invoice"></i>
                  <span className="sidebarFont">Billing</span>
                </Link>
              </li>
              <li>
                <Link to="/dues">
                  <i className="fas fa-file-invoice"></i>
                  <span className="sidebarFont">Check Dues</span>
                </Link>
              </li>
              <li>
                <Link to="/stock">
                  <i className="fas fa-inventory"></i>
                  <span className="sidebarFont">Manage stocks</span>
                </Link>
              </li>
              <li>
                <Link to="/income">
                  <i className="fas fa-chart-line"></i>
                  <span className="sidebarFont">Track Income</span>
                </Link>
              </li>
              {/* <li>
                <Link to="/contact">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span className="sidebarFont">Contact</span>
                </Link>
              </li> */}
              {/* <li>
                <Link to="/about">
                  <i className="fa fa-info" aria-hidden="true"></i>
                  <span className="sidebarFont">About</span>
                </Link>
              </li> */}
              <li>
                <Link to="/" onClick={handleLogout}>
                  <i className="fas fa-sign-out-alt"></i>
                  <span className="sidebarFont">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ width: "100%" }}>
          

          <div className="container" id="beside-sidebar">
            <div className="dashboard-content row">
              <div className="col-md-3">
                <div className="dashboard-card">
                  <p>Total Sales</p>
                  <h3>₹ 50,000</h3>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dashboard-card">
                  <p>Total Stock</p>
                  <h3>150 Items</h3>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dashboard-card">
                  <p>Pending Dues</p>
                  <h3>₹ 5,000</h3>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dashboard-card">
                  <p>Today's Income</p>
                  <h3>₹ 2,000</h3>
                </div>
              </div>
            </div>

            <div className="chart-row row">
              <div className="chart-container col-md-6">
                <div className="cardChart shadow-lg p-4">
                  <h4 className="text-center mb-4">Income Trends</h4>
                  <canvas id="incomeChart"></canvas>
                </div>
              </div>
              <div className="pie-chart-container col-md-6">
                <div className="cardChart shadow-lg p-4">
                  <h4 className="text-center">Overall Dues</h4>
                  <canvas id="duesChart"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
