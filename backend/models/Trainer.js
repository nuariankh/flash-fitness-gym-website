mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrainerSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    tagline: {
        type: String,
        required: false
    },
    lastname: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Trainer', TrainerSchema);