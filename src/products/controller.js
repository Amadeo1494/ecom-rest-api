const e = require('express');
const { response } = require('express');
const pool = require('../../database');
const queries = require('./queries');

// read: all products
const getProducts = (req, res) => {
    pool.query(queries.getProducts, (error, results) => {
        if(error) {
            res.status(404).send('database not found');
        } else {
            res.status(200).json(results.rows);
        }
    });
};

// read: specific product by ID
const getProductById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getProductById, [id], (error, results) => {
        if(error) {
            res.status(404).send('database not found');
        } else {
            res.status(200).json(results.rows);
        }
    });
};

// create: add products
const addProduct = (req, res) => {
    const { sku, artist, album, genre, year, price } = req.body;

    // check if sku already exists
    pool.query(queries.checkSkuExists, [sku], (error, results) => {

        if(results.rows.length) {
            res.status(409).send("SKU already exists!");
        };

        // add product to the databse
        pool.query(queries.addNewProduct, [sku, artist, album, genre, year, price], (error, response) => {
            if(error) {
                res.status(404).send('error!');
            } else {
                res.status(201).send('The product has been added sucessfully!');
            };
        });
    });
};

// update: amend product price
const updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const { price } = req.body;

    pool.query(queries.getProductById, [id], (error, results) => {
        const productNotFound = !results.rows.length;

        if(productNotFound) {
            res.status(404).send('The product ID does not exists in the databse!');
        };

        pool.query(queries.updateProduct, [price, id], (error, results) => {
            if(error) {
                res.status(404).send('The product ID does not exists in the databse!');
            } else {
                res.status(200).send('The price has been sucessfully amended!')
            };
        });
    });
};

// delete: remove products
const removeProduct = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getProductById, [id], (error, results) => {
        const productNotFound = !results.rows.length;

        if(productNotFound) {
            res.status(404).send('The product ID does not exists in the databse!');
        };

        pool.query(queries.removeOldProduct, [id], (error, results) => {
            if(error) {
                res.status(404); 
            } else {
                res.status(200).send('The product has been sucessfully removed!');
            };
        });
    });
};
    
module.exports = {
    getProducts,
    getProductById,
    addProduct,
    removeProduct,
    updateProduct,
};