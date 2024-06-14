const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: false,
        unique: true
    },
    description: {
        type: String,
        required: false
    },
    email: {type: String, required: true},
    password: {type: String, required: true}
}, {timestamps: true})

// Static signup method
userSchema.statics.signup = async function (email, password) {
    
    // Validation
    if(!email || !password){
        throw Error('All field must be filled!')
    }

    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }

    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough (Uppercase, lowercase, number, symbol, and minimum 8 characters required)')
    }

    const exists = await this.findOne({email})
    if(exists) {
        throw Error('Email already in use')
    }

    // Hashing password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, password: hash})

    return user
}

// Static login method
userSchema.statics.login = async function (email, password) {
    
    if(!email || !password){
        throw Error('All field must be filled!')
    }

    const user = await this.findOne({email})
    if(!user) {
        throw Error('Email not found')
    }

    // Compare hashed user password with hash data in DB
    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error('Incorrect password')
    }

    return user

}

module.exports = mongoose.model('User', userSchema)