import React, { useState } from "react";
import { Link } from "react-router-dom";  // Importing Link from react-router-dom

const Dues = () => {
  const [customers, setCustomers] = useState([]);
  const [form, setForm] = useState({
    customerName: "",
    customerContact: "",
    dueAmount: "",
    dueDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const addCustomer = () => {
    const { customerName, customerContact, dueAmount, dueDate } = form;

    if (!customerName || !customerContact || isNaN(dueAmount) || !dueDate) {
      alert("Please fill out all fields correctly.");
      return;
    }

    setCustomers([
      ...customers,
      {
        customerName,
        customerContact,
        dueAmount: parseFloat(dueAmount),
        dueDate,
      },
    ]);
    setForm({ customerName: "", customerContact: "", dueAmount: "", dueDate: "" });
  };

  const handlePartialPayment = (index) => {
    const partialPayment = parseFloat(prompt("Enter amount to pay (₹):"));
    if (isNaN(partialPayment) || partialPayment <= 0 || partialPayment > customers[index].dueAmount) {
      alert("Invalid payment amount.");
      return;
    }

    const updatedCustomers = [...customers];
    updatedCustomers[index].dueAmount -= partialPayment;

    if (updatedCustomers[index].dueAmount === 0) {
      updatedCustomers[index].paid = true;
    }

    setCustomers(updatedCustomers);
  };

  const handleMarkPaid = (index) => {
    const updatedCustomers = [...customers];
    updatedCustomers[index].dueAmount = 0;
    updatedCustomers[index].paid = true;
    setCustomers(updatedCustomers);
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
              {/* <li className="dropdown">
                <Link to="#" className="dropdown-toggle">Services</Link>
                <ul className="dropdown-menu">
                  <li><Link to="/billing">Billing</Link></li>
                  <li><Link to="/dues">Dues</Link></li>
                  <li><Link to="/stock">Stock</Link></li>
                  <li><Link to="/income">Income</Link></li>
                </ul>
              </li> */}
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Dues Section */}
      <div className="container mt-5">
        <h1 className="text-center mb-5 mt-0 pt-0" style={{ color: "#50d890" }}>Customer Dues</h1>

        {/* Add Customer Form */}
        <div className="cardChart dueBox shadow-lg p-4 mb-4">
          <h4 className="text-center mb-4" style={{ color: "#50d890" }}>Add Customer with Due</h4>
          <div className="form-row form-row1">
            <div className="col-md-4 mb-3">
              <input
                type="text"
                className="form-control"
                name="customerName"
                placeholder="Customer Name"
                value={form.customerName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <input
                type="text"
                className="form-control"
                name="customerContact"
                placeholder="Contact (Phone/Email)"
                value={form.customerContact}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <input
                type="number"
                className="form-control"
                name="dueAmount"
                placeholder="Due Amount (₹)"
                value={form.dueAmount}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12 mb-3">
              <input
                type="date"
                className="form-control"
                name="dueDate"
                value={form.dueDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12 text-center">
              <button
                type="button"
                className="btn btn-success btn-lg w-100"
                onClick={addCustomer}
              >
                <i className="fas fa-user-plus"></i> Add Customer
              </button>
            </div>
          </div>
        </div>

        {/* Dues Table */}
        <div className="card shadow-lg p-4">
          <h4 className="text-center mb-4" style={{ color: "#50d890" }}>Customer Dues List</h4>
          <table className="table table-hover table-bordered text-center">
            <thead className="thead-dark">
              <tr>
                <th>Customer Name</th>
                <th>Contact</th>
                <th>Due Amount (₹)</th>
                <th>Due Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index}>
                  <td>{customer.customerName}</td>
                  <td>{customer.customerContact}</td>
                  <td className="dueAmount">₹{customer.dueAmount.toFixed(2)}</td>
                  <td>{customer.dueDate}</td>
                  <td className="action-buttons">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handlePartialPayment(index)}
                    >
                      Pay Partial
                    </button>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => handleMarkPaid(index)}
                      disabled={customer.paid}
                    >
                      Mark Paid
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dues;
