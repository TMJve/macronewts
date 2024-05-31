const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // profilePicture: {
    //     data: Buffer,
    //     contentType: String
    // },
    email: {type: String, required: true},
    password: {type: String, required: true}
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)