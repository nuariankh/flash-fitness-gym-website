const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const upload = require('../upload');

//sign up user
router.post('/signup', async (req, res) => {
    try {
        const { username, firstName, lastName, password, email, membership, admin } = req.body;
        
        if (!username || !firstName || !lastName || !password) {
            return res.status(400).send({ error: 'All fields are required' });
        }
        const newUser = new User({
            username,
            firstName,
            lastName,
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
            const token = jwt.sign(
                { 
                    _id: user._id, 
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email, 
                    membership: user.membership, 
                    admin: user.admin 
                }, process.env.JWT_SECRET, { expiresIn: '1h' });
            
            console.log('Generated Token:', token);

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

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Serve error' });
    }
});

router.post('/:id/profile-photo', upload.single('profilePhoto'), async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found ' });
        }

        //Store uploaded file's path in user's porfilePhoto field
        user.profilePhoto = req.file.path;

        //Save the updated user to the database
        await User.save();

        res.json({ message: 'Profile photo uploaded sccessfully', profilePhoto: user.profilePhoto });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// GET users listing
router.get('/', async (req, res, next) => {
    const users = await User.find();
    res.setHeader('Content-Type', 'application/json');
    res.json(users)
});

// Delete all users
router.delete('/',  async (req, res) => {
    try {
        await User.deleteMany({});
        res.status(200).json({ message: "All users have been successfully deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
