const express = require('express');
const router = express.Router();
const GymClass = require('../models/GymClass');

router.get('/', async (req, res) => {
    try {
        const gymClasses = await GymClass.find();
        res.json(gymClasses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    const gymClass = new GymClass({
        name: req.body.name,
        instructor: req.body.instructor,
        description: req.body.description,
        duration: req.body.duration,
        location: req.body.location,
        offeredOn: req.body.offeredOn
    });
    try {
        const newGymClass = await gymClass.save();
        res.status(200).json(newGymClass);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/', async (req, res) => {
    try {
        await GymClass.deleteMany({});
        res.status(200).json({ message: "All classes have successfully been deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

router.get('/:gymClassId', async (req, res) => {
    try {
        const gymClass = await GymClass.findOne({ _id: req.params.gymClassId }); //Get gym class by id
        if (!gymClass) {
            return res.status(404).json({ message: "Class not found" });
        }
        return res.status(200).json(gymClass);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:gymClassId', async (req, res) => {
    try {
        const deletedClass = await GymClass.findByIdAndDelete(req.params.gymClassId);
        if (!deletedClass) {
            return res.status(404).json({ message: "Class not found" });
        }
        res.status(200).json({ message: "Class successfully deleted" });
    } catch (err) {
        res.status(500).json({ error: err.status });
    }
    

});

module.exports = router;