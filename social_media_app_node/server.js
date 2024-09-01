const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
require('./passport-config'); // Add this line after initializing Passport

// Load environment variables from .env file
dotenv.config();

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Express session 
app.use(
  session({
    secret: 'your_secret_key', // Replace with your secret key
    resave: true,
    saveUninitialized: true,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/social_media_app')
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('MongoDB connection error:', err));

  // Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// Load Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Example route to handle profile page, if you are serving server-side rendered views
app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/views/profile.html'));
});

// Define a route to handle GET requests to the root URL (/)
app.get('/', (req, res) => {
  res.send('Welcome to the Social Media App!'); // Respond with a message or HTML content
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
