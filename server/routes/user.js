const express = require('express')
const {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
} = require("../controllers/userController")

const router = express.Router()

// GET all user data
router.get('/', getUsers)

//GET a single user data
router.get('/:id', getUser)

//POST new user data
router.post('/', createUser)

//DELETE user data
router.delete('/:id', deleteUser)

//UPDATE a user data
router.patch('/:id', updateUser)

module.exports = router