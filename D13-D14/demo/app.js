const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todoRoutes')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;



const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('connected to db')
    }catch(error){
        console.error('Error connecting to MongoDB:', error);
    }
}



//Routes
app.use('/todos', todoRoutes);

app.listen(port, ()=>{
    console.log('server running');
    connectToDatabase();
    
});