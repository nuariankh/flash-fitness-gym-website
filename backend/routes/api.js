const express = require('express');
const router = express.Router();

const usersRouter = require('./users');
const trainersRouter = require('./trainers');
const gymClassesRouter = require('./gymClasses');

router.get('/', (req, res) => {
    res.json({ message: "Welcome to the Flash Fitness api" });
})

router.use('/users', usersRouter);
router.use('/trainers', trainersRouter);
router.use('/classes', gymClassesRouter);

module.exports = router;

