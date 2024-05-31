require('dotenv').config();

// Initialize package
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')

// Express app
const app = express()

// Middleware
app.use(express.json())
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/user', userRoutes)

// Connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listening on port 4000
        app.listen(process.env.PORT, () =>{
            console.log('Connected to db & listening to port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


process.env