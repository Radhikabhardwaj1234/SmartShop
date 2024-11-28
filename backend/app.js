const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const port = 2000;
const cors = require('cors');

// MongoDB connection
mongoose.connect('mongodb+srv://radha16903:radha16903@cluster0.hxb4y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('MongoDB connection error:', err);
});

// User model schema
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    shopName: String,
    aadharNumber: String,
    phoneNumber: String,
    shopAddress: String,
});

app.use(cors({
    origin: '*', // Replace with your frontend domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));

const User = mongoose.model('User', userSchema);

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Session management
app.use(session({
    secret: 'mysecret',  // Use a strong secret in production
    resave: false,
    saveUninitialized: true,
}));

// Serve static files (e.g., for the front-end)
app.use(express.static('public'));

// Registration Route
app.post('/register', async (req, res) => {
    const { name, email, password, shopName, aadharNumber, phoneNumber, shopAddress } = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            shopName,
            aadharNumber,
            phoneNumber,
            shopAddress,
        });

        await newUser.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(400).send('Error registering user');
    }
});


// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });

        // If user is not found, send a 400 response
        if (!user) {
            return res.status(400).json('User not found');
        }

        // Compare the password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);

        // If password doesn't match, send a 400 response
        if (!isMatch) {
            return res.status(400).json('Invalid password');
        }

        // Store user in session
        req.session.user = user;

        // Respond with a success message (optional: return user data)
        res.status(200).json({ message: 'Login successful', user: user.email });

    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json('Error logging in');
    }
});

// Get Logged-in User Data
app.get('/api/user', (req, res) => {
    if (req.session.user) {
        res.json({ name: req.session.user.name });
    } else {
        res.status(401).json({ message: 'Not logged in' });
    }
});

// Dashboard Route (accessible only after login)
app.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.send('Welcome to your Dashboard, ' + req.session.user.name);
    } else {
        res.status(401).send('Please log in first');
    }
});

// Logout Route (destroy session)
app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
            return res.status(500).json({ message: 'Error logging out' });
        }

        // Clear the cookie if set
        res.clearCookie('connect.sid'); 

        // Send success response
        res.status(200).json({ message: 'Logged out successfully' });
    });
});


// Serve the frontend HTML (You should use a templating engine like EJS or serve HTML directly)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');  // Serve login page
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
