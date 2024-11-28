import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Stock = () => {
    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const handleAddProduct = () => {
        if (!productName || isNaN(quantity) || isNaN(price) || quantity <= 0 || price <= 0) {
            alert("Please fill out all fields correctly.");
            return;
        }
    
        // Parse quantity and price to numbers
        const quantityNumber = parseFloat(quantity);
        const priceNumber = parseFloat(price);
        const totalValue = quantityNumber * priceNumber;
    
        setProducts([
            ...products,
            {
                productName,
                quantity: quantityNumber,
                price: priceNumber,
                totalValue,
            },
        ]);
    
        // Clear input fields after adding
        setProductName('');
        setQuantity('');
        setPrice('');
    };
    
    const handleEditProduct = (index) => {
        const newQuantity = parseFloat(prompt("Enter new quantity:", products[index].quantity));
        const newPrice = parseFloat(prompt("Enter new price:", products[index].price));
    
        if (isNaN(newQuantity) || isNaN(newPrice) || newQuantity <= 0 || newPrice <= 0) {
            alert("Please enter valid values.");
            return;
        }
    
        const updatedProducts = [...products];
        updatedProducts[index] = {
            ...updatedProducts[index],
            quantity: newQuantity,
            price: newPrice,
            totalValue: newQuantity * newPrice,
        };
    
        setProducts(updatedProducts);
    };

    const handleRemoveProduct = (index) => {
        const updatedProducts = products.filter((_, i) => i !== index);
        setProducts(updatedProducts);
    };

    return (
        <>
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
                        <img src="./assets/logos.png" alt="Logo" />
                        <ul>
                            <li><Link to="/">Home</Link></li> {/* Updated to use Link */}
                            <li><Link to="/about">About</Link></li> {/* Updated to use Link */}
                            {/* <li className="dropdown">
                                <a href="#" className="dropdown-toggle" id="servicesDropdown" data-toggle="dropdown">Services</a>
                                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                                    <li><Link to="/billing">Billing</Link></li> 
                                    <li><Link to="/dues">Dues</Link></li> 
                                    <li><Link to="/stock">Stock</Link></li> 
                                    <li><Link to="/income">Income</Link></li> 
                                </ul>
                            </li> */}
                            <li><Link to="/contact">Contact Us</Link></li> {/* Updated to use Link */}
                        </ul>
                    </div>
                </nav>
            </header>

            {/* Stock Management Section */}
            <div className="container mt-5">
                <h1 className="text-center mb-5 mt-0 pt-0">Stock Management</h1>

                {/* Add Product Form */}
                <div className="cardChart dueBox shadow-lg p-4 mb-4">
                    <h4 className="text-center mb-4">Add New Product</h4>
                    <div className="form-row form-row1">
                        <div className="col-md-4 mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                placeholder="Product Name"
                                required
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <input
                                type="number"
                                className="form-control"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                placeholder="Quantity"
                                required
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <input
                                type="number"
                                className="form-control"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Price (₹)"
                                required
                            />
                        </div>
                        <div className="col-12 text-center">
                            <button
                                type="button"
                                className="btn btn-success btn-lg w-100"
                                onClick={handleAddProduct}
                            >
                                <i className="fas fa-plus"></i> Add Product
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product List Table */}
                <div className="card shadow-lg p-4">
                    <h4 className="text-center mb-4">Stock List</h4>
                    <table className="table table-hover table-bordered text-center">
                        <thead className="thead-dark">
                            <tr>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Price (₹)</th>
                                <th>Total Value (₹)</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={index}>
                                    <td>{product.productName}</td>
                                    <td className="quantity">{product.quantity}</td>
                                    <td className="price">₹{product.price.toFixed(2)}</td>
                                    <td className="totalValue">₹{product.totalValue.toFixed(2)}</td>
                                    <td className="action-buttons">
                                        <button
                                            className="btn btn-warning btn-sm"
                                            onClick={() => handleEditProduct(index)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleRemoveProduct(index)}
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            </>
    );
};

export default Stock;
