const express = require('express');
const router = express.Router();
const Trainer = require('../models/Trainer');
const authenticate = require('../authenticate');

router.get('/', async (req, res) => {
    try {
        const trainers = await Trainer.find();
        res.json(trainers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const trainer = new Trainer({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        tagline: req.body.tagline,
        bio: req.body.bio,
        image: req.body.image
    });
    try {
        const newTrainer = await trainer.save();
        res.status(201).json(newTrainer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/', authenticate.verifyUser, authenticate.verifyAdmin, async (req, res) => {
    try {
        await Trainer.deleteMany({});
        res.status(200).json({ message: "All trainers have been successfully deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    
});

router.get('/:trainerId', async (req, res) => {
    try {
        const trainer = await Trainer.findOne({ _id: req.params.trainerId });
        if (!trainer) {
            return res.status(404).json({ message: "Trainer not found" });
        }
        res.status(200).json(trainer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:trainerId', async (req, res) => {
    try {
        const deletedTrainer = await Trainer.findByIdAndDelete(req.params.trainerId);
        if (!deletedTrainer) {
            return res.status(404).json({ message: "Trainer not found" });
        }
        res.status(200).json({ message: "Trainer successfully deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;