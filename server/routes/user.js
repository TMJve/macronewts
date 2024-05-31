const express = require('express')

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
router.post('/', (req, res) => {
    res.json({msg: 'POST a new user data'})
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