const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust path as necessary
const multer = require('multer');
const path = require('path');
const upload = multer({
    dest: 'uploads/', // Directory to save uploaded files
    limits: { fileSize: 1000000 } // Limit file size (1MB for example)
});

router.get('/edit', (req, res) => {
    User.findById(req.user._id, (err, user) => {
        if (err) return res.status(500).send('Error finding user');
        res.render('profile/edit', { user });
    });
});

router.post('/update', upload.single('profilePicture'), (req, res) => {
    const updateData = {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        info: req.body.info
    };

    if (req.file) {
        updateData.profilePicture = req.file.path;
    }

    User.findByIdAndUpdate(req.user._id, updateData, (err) => {
        if (err) return res.status(500).send('Error updating profile');
        res.redirect('/profile/edit');
    });
});

router.post('/delete', (req, res) => {
    User.findByIdAndDelete(req.user._id, (err) => {
        if (err) return res.status(500).send('Error deleting profile');
        req.logout();
        res.redirect('/');
    });
});

router.get('/edit', (req, res) => {
    res.render('profile/edit', { user: req.user });
});

router.post('/update', (req, res) => {
    User.findByIdAndUpdate(req.user._id, req.body, (err) => {
        if (err) return res.status(500).send('Error updating profile');
        res.redirect('/profile/edit');
    });
});

router.post('/delete', (req, res) => {
    User.findByIdAndDelete(req.user._id, (err) => {
        if (err) return res.status(500).send('Error deleting profile');
        req.logout();
        res.redirect('/');
    });
});

module.exports = router;
