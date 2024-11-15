const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

//sign up user
router.post('/signup', async (req, res) => {
    try {
        const { username, firstname, lastname, password, email, membership, admin } = req.body;
        
        if (!username || !firstname || !lastname || !password) {
            return res.status(400).send({ error: 'All fields are required' });
        }
        const newUser = new User({
            username,
            firstname,
            lastname,
            email,
            membership,
            admin,
        });
        await User.register(newUser, password);
        res.status(201).send({ message: 'User signed up successfully!' });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

//login user
router.post('/login', (req, res) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                message: 'Something is not right',
                user: user
            });
        }
        req.login(user, { session: false }, (err) => {
            if (err) {
                return next(err);
            }
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: 3600 });
            
            res.cookie('jwtToken', token, {
                maxAge: 3600000, // Cookie expiration time in milliseconds
                sameSite: 'strict', // Ensures the cookie is only sent in a first-party context
                httpOnly: false,   // Set to false for testing to make it accessible to JavaScript
                secure: false      // Set to false if testing on localhost without HTTPS
            });
            
            return res.json({ success: true, token: token });
        })
    })(req, res)
});

router.get('/logout', async (req, res, next) => {
    res.clearCookie('jwtToken');
    res.redirect('/');
});


/* GET users listing. */
router.get('/', async (req, res, next) => {
    const users = await User.find();
    res.setHeader('Content-Type', 'application/json');
    res.json(users)
});

module.exports = router;
