const e = require('express');
const { response } = require('express');
const pool = require('../../database');
const queries = require('./queries');

// read: all orders
const getAllOrders = (req, res) => {
    pool.query(queries.getAllOrders, (error, results) => {
        if(error) {
            res.status(404).send('database not found');
        } else {
            res.status(200).json(results.rows);
        }
    });
};

// read: specific order by ID
const getOrderById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getOrderById, [id], (error, results) => {
        if(error) {
            res.status(404).send('database not found');
        } else {
            res.status(200).json(results.rows);
        }
    });
};

// create: add orders
const addOrder = (req, res) => {
    const { order_id, product_id, product_qty, user_id } = req.body;

    // check if order already exists
    pool.query(queries.checkOrderExists, [order_id], (error, results) => {

        if(results.rows.length) {
            res.status(409).send("The order already exists!");
        };

        // add order to the databse
        pool.query(queries.addNewOrder, [order_id, product_id, product_qty, user_id], (error, response) => {
            if(error) {
                res.status(404).send('error!');
            } else {
                res.status(201).send('The order has been added sucessfully!');
            };
        });
    });
};

// update: amend order qty
const updateOrder = (req, res) => {
    const id = parseInt(req.params.id);
    const { product_qty } = req.body;

    pool.query(queries.getOrderById, [id], (error, results) => {
        const orderNotFound = !results.rows.length;

        if(orderNotFound) {
            res.status(404).send('The order ID does not exist in the databse!');
        };

        pool.query(queries.updateOrder, [product_qty, id], (error, results) => {
            if(error) {
                res.status(404).send('The order ID does not exists in the databse!');
            } else {
                res.status(200).send('The quantitu has been sucessfully amended!')
            };
        });
    });
};

// delete: remove products
const removeOrder = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getOrderById, [id], (error, results) => {
        const orderNotFound = !results.rows.length;

        if(orderNotFound) {
            res.status(404).send('The order does not exist in the databse!');
        };

        pool.query(queries.removeOrder, [id], (error, results) => {
            if(error) {
                res.status(404); 
            } else {
                res.status(200).send('The order has been sucessfully removed!');
            };
        });
    });
};
    
module.exports = {
    getAllOrders,
    getOrderById,
    addOrder,
    updateOrder,
    removeOrder,
};