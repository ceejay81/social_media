const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('./models/User');

// Register endpoint
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).send('User registered successfully');
    } catch (err) {
        res.status(500).send('Error registering user');
    }
});

// Login endpoint
router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.status(401).send('Invalid credentials');
        req.logIn(user, (err) => {
            if (err) return next(err);
            res.status(200).send('Logged in successfully');
        });
    })(req, res, next);
});

// Get user profile
router.get('/profile', (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).send('Not authenticated');
    }
    User.findById(req.user._id, (err, user) => {
        if (err) return res.status(500).send('Error fetching profile');
        res.status(200).send(user);
    });
});

// Update user profile
router.put('/profile', (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).send('Not authenticated');
    }
    User.findByIdAndUpdate(req.user._id, req.body, { new: true }, (err, user) => {
        if (err) return res.status(500).send('Error updating profile');
        res.status(200).send(user);
    });
});

module.exports = router;
