require('dotenv').config();

const productsData = require('./data/product');

const connectDB = require('./config/db');

const Product = require('./models/Product');

connectDB();

const importData = async ()=>{
    try {
        await Product.deleteMany({});
        await Product.insertMany(productsData);

        console.log('data import successfully');

        process.exit();
    } catch (error) {
        console.error('Error with import data ', error);
        process.exit(1);
    }
}

importData();