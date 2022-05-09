const e = require('express');
const { response } = require('express');
const pool = require('../../database');
const queries = require('./queries');

// read: all carts
const getAllCarts = (req, res) => {
    pool.query(queries.getAllCarts, (error, results) => {
        if(error) {
            res.status(404).send('database not found');
        } else {
            res.status(200).json(results.rows);
        }
    });
};

// read: specific cart by ID
const getCartById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getCartById, [id], (error, results) => {
        if(error) {
            res.status(404).send('database not found');
        } else {
            res.status(200).json(results.rows);
        }
    });
};

// create: add carts
const addNewCart = (req, res) => {
    const { cart_id, user_id, order_id, product_id, product_qty } = req.body;

    // check if cart already exists
    pool.query(queries.checkCartExists, [cart_id], (error, results) => {

        if(results.rows.length) {
            res.status(409).send("This cart already exists!");
        };

        // add cart to the databse
        pool.query(queries.addNewCart, [ cart_id, user_id, order_id, product_id, product_qty ], (error, response) => {
            if(error) {
                res.status(404).send('error!');
            } else {
                res.status(201).send('The cart has been created sucessfully!');
            };
        });
    });
};

// update: amend the cart
const updateCart = (req, res) => {
    const id = parseInt(req.params.id);
    const { product_id } = req.body;

    pool.query(queries.getCartById, [id], (error, results) => {
        const cartNotFound = !results.rows.length;

        if(cartNotFound) {
            res.status(404).send('The product ID does not exists in the databse!');
        };

        pool.query(queries.updateCart, [product_id, id], (error, results) => {
            if(error) {
                res.status(404).send('The cart ID does not exists in the databse!');
            } else {
                res.status(200).send('The product has been sucessfully amended!')
            };
        });
    });
};

// delete: remove carts
const removeCartItems = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getCartById, [id], (error, results) => {
        const cartNotFound = !results.rows.length;

        if(cartNotFound) {
            res.status(404).send('The cart ID does not exists in the databse!');
        };

        pool.query(queries.removeCartItems, [id], (error, results) => {
            if(error) {
                res.status(404); 
            } else {
                res.status(200).send('The cart has been sucessfully removed!');
            };
        });
    });
};
    
module.exports = {
    getAllCarts,
    getCartById,
    addNewCart,
    removeCartItems,
    updateCart,
};