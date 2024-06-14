require('dotenv').config();


// Initialize package
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const cors = require('cors');

// Express app
const app = express()

// Middleware
app.use(express.json())
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

//configure cors
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

// Routes
app.use('/api/user', userRoutes)

// Connect to db
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
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