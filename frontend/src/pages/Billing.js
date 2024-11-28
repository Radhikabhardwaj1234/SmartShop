import React, { useState } from "react";
import { Link } from "react-router-dom";

const Billing = () => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const addProduct = () => {
    if (!productName || quantity <= 0 || price <= 0) {
      alert("Please enter valid product details.");
      return;
    }

    const total = parseFloat(quantity) * parseFloat(price);
    const newProduct = { productName, quantity: parseFloat(quantity), price: parseFloat(price), total };
    setProducts([...products, newProduct]);
    clearInputs();
  };

  const clearInputs = () => {
    setProductName("");
    setQuantity("");
    setPrice("");
  };

  const clearTable = () => {
    setProducts([]);
  };

  const generateInvoice = () => {
    if (products.length === 0) {
      alert("No products to generate an invoice.");
      return;
    }
  
    // Create a printable area
    const printableArea = document.createElement("div");
    printableArea.innerHTML = `
      <h1 style="text-align: center;">Invoice</h1>
      <table style="width: 100%; border-collapse: collapse; text-align: center;" border="1">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price (₹)</th>
            <th>Total (₹)</th>
          </tr>
        </thead>
        <tbody>
          ${products
            .map(
              (product) => `
            <tr>
              <td>${product.productName}</td>
              <td>${product.quantity}</td>
              <td>₹${product.price.toFixed(2)}</td>
              <td>₹${product.total.toFixed(2)}</td>
            </tr>`
            )
            .join("")}
        </tbody>
      </table>
      <h3 style="text-align: right; margin-top: 20px;">Grand Total: ₹${calculateTotal()}</h3>
    `;
  
    // Open a new window
    const printWindow = window.open("", "_blank", "width=800,height=600");
    printWindow.document.write(printableArea.outerHTML);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  
    clearTable(); // Optional: Clear the table after generating the invoice
  };
  

  const calculateTotal = () =>
    products.reduce((acc, product) => acc + product.total, 0).toFixed(2);

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
                <Link to="#" className="dropdown-toggle" id="servicesDropdown">
                  Services
                </Link>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
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

      {/* Billing Section */}
      <div className="container pt-0">
        <h1 className="text-center mb-4">Billing System</h1>
        <div className="row">
          <div className="col-md-8">
            <div className="cardAbout p-4">
              <h4 className="text-center mb-3">Add Product</h4>
              <div className="form-row  input-billing">
                <div className="col-md-4 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Product Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <button className="btn btn-success btn-block" onClick={addProduct}>
                <i className="fas fa-plus"></i> Add Product
              </button>
            </div>

            <div className="mt-4">
              <table className="table table-bordered table-striped text-center billTable">
                <thead className="thead-dark">
                  <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price (₹)</th>
                    <th>Total (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index}>
                      <td>{product.productName}</td>
                      <td>{product.quantity}</td>
                      <td>₹{product.price.toFixed(2)}</td>
                      <td>₹{product.total.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cardAbout p-4">
              <h4 className="text-center mb-4 mt-5">Total</h4>
              <div className="text-right">
                <h3>Total: ₹{calculateTotal()}</h3>
              </div>
              <button
                className="btn btn-primary btn-block"
                onClick={generateInvoice}
              >
                <i className="fas fa-file-invoice"></i> Generate Invoice
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
