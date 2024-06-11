const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/products.model.js');
const productRoutes = require('./routes/product.routes.js');
const app = express();

// Middleware to parse JSON bodies and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//routes
app.use("/api/products",productRoutes);

app.get('/', (req, res) => {
  res.send('hello world this is fun');
});

require('dotenv').config();
connection_string = process.env.CONNECTION_STRING;
console.log('Connection String:', connection_string);

mongoose.connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to the database');
    app.listen(3000, () => {
        console.log('App is running on port 3000');
    });
})
.catch((error) => {
    console.error('Database connection failed:', error);
});
