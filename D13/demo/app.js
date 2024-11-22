const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('server running');
    connectToDatabase();
    
});

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('connected to db')
    }catch(error){
        console.error('Error connecting to MongoDB:', error);
    }
}