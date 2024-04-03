import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';
import connectDB from './config/db.js'

dotenv.config();
connectDB();

const port = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res)=>{
    return res.send("API is running");
})

app.get('/api/products', (req, res)=>{
    res.json(products);
})

app.get('/api/products/:id', (req, res)=>{
    const product = products.find((p) => p._id === req.params.id);
    return res.json(product);
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});