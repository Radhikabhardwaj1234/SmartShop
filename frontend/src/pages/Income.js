import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { Link } from 'react-router-dom'; // import Link for navigation

const Income = () => {
  const [incomeData, setIncomeData] = useState([]);
  const [incomeLabels, setIncomeLabels] = useState([]);
  const [allIncomeDates, setAllIncomeDates] = useState([]);
  const [incomeAmount, setIncomeAmount] = useState("");
  const [incomeDate, setIncomeDate] = useState("");

  useEffect(() => {
    showOverallProgress();
  }, [allIncomeDates]);

  const handleIncomeSubmit = (e) => {
    e.preventDefault();

    if (!incomeAmount || !incomeDate) {
      alert("Please fill in all fields.");
      return;
    }

    const year = new Date(incomeDate).getFullYear();

    // Add new income data
    const newIncome = {
      date: incomeDate,
      year: year,
      income: parseFloat(incomeAmount),
    };

    setAllIncomeDates([...allIncomeDates, newIncome]);
    setIncomeAmount('');
    setIncomeDate('');

    // Update the chart
  };

  const showOverallProgress = () => {
    const labels = allIncomeDates.map(entry => entry.date);
    const data = allIncomeDates.map(entry => entry.income);
    setIncomeLabels(labels);
    setIncomeData(data);
  };

  const chartData = {
    labels: incomeLabels,
    datasets: [{
      label: 'Daily Income (₹)',
      data: incomeData,
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      pointBackgroundColor: 'rgba(255, 99, 132, 1)',
      pointBorderColor: 'rgba(255, 99, 132, 1)',
      pointHoverBackgroundColor: 'rgba(255, 206, 86, 1)',
      pointHoverBorderColor: 'rgba(255, 206, 86, 1)',
      fill: true,
      tension: 0.1,
    }]
  };

  return (
    <div>
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
        </ul>
      </div>

      {/* Header */}
      <header>
        <nav className="navbar">
          <div className="container">
            <img src="/assets/logos.png" alt="logo" />
            <ul>
              <li><Link to="/">Home</Link></li> {/* Changed from <a> to <Link> */}
              <li><Link to="/about">About</Link></li> 
              {/* <li className="dropdown">
                <Link to="#" className="dropdown-toggle" id="servicesDropdown" data-toggle="dropdown">Services</Link> 
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                  <li><Link to="/billing">Billing</Link></li> 
                  <li><Link to="/dues">Dues</Link></li> 
                  <li><Link to="/stock">Stock</Link></li> 
                  <li><Link to="/income">Income</Link></li> 
                </ul>
              </li> */}
              <li><Link to="/contact">Contact Us</Link></li> {/* Changed from <a> to <Link> */}
            </ul>
          </div>
        </nav>
      </header>

      {/* Income Tracker Section */}
      <div className="container mt-5">
        <h1 className="text-center mb-5 mt-0">Daily Income Tracker</h1>

        {/* Add Income Form */}
        <div className="cardChart dueBox shadow-lg p-4 mb-4">
          <h4 className="text-center mb-4">Enter Income Details</h4>
          <form onSubmit={handleIncomeSubmit}>
            <div className="form-group">
              <label htmlFor="incomeDate">Date of Income:</label>
              <input
                type="date"
                id="incomeDate"
                className="form-control"
                value={incomeDate}
                onChange={(e) => setIncomeDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="incomeAmount">Income Amount (₹):</label>
              <input
                type="number"
                id="incomeAmount"
                className="form-control"
                placeholder="Enter income"
                value={incomeAmount}
                onChange={(e) => setIncomeAmount(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">Submit Income</button>
          </form>
        </div>

        {/* Chart for Daily Income */}
        <div className="cardChart shadow-lg p-4">
          <h4 className="text-center mb-4">Income Overview</h4>
          <Line data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Income;
