const express = require('express')
const User = require("../models/userModel")

const router = express.Router()

// GET all user data
router.get('/', (req, res) => {
    res.json({msg: 'GET all user data'})
})

//GET a single user data
router.get('/:id', (req, res) => {
    res.json({msg: 'GET 1 user data'})
})

//POST new user data
router.post('/', async (req, res) => {
    const {name, description, email, password} = req.body

    try{
        const user = await User.create({name, description, email, password})
        res.status(200).json(user)
    } catch(error){
        res.status(400).json({error: error.message})
    }
})

//DLETE user data
router.post('/:id', (req, res) => {
    res.json({msg: 'DELETE a user data'})
})

//UPDATE a user data
router.patch('/:id', (req, res) => {
    res.json({msg: 'UPDATE a user data'})
})

module.exports = router