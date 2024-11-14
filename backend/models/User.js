const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        default: "",
        required: false
    },
    lastname: {
        type: String,
        default: "",
        required: false
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        default: "",
        required: true
    },
    membership: {
        type: String,
        default: "",
        required: false
    },
    admin: {
        type: Boolean,
        default: false,
        required: false
    },

});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);