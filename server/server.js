const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const app = express();
const PORT = 3000;

//MONGODB
const {MongoClient, ServerApiVersion} = require('mongodb');
const uri = "mongodb+srv://rampart:rampart@macronewts.br71kma.mongodb.net/?retryWrites=true&w=majority&appName=MacroNewts";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict:true,
        deprecationErrors: true,
    }
});

//Middleware
app.use(cors());
app.use(express.json());

//MONGODB CONN

mongoose.connect('')


//Routes

app.get('/', (req,res) => {

})

app.listen(PORT, () => {
    console.log('Server is running');  
})