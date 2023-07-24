var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    personalName: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    contactInfo: {
        type: Number,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Data", userSchema);