const e = require('express');
const { response } = require('express');
const res = require('express/lib/response');
const pool = require('../../database');
const queries = require('./queries');


// create: add a new user
const addNewUser = (req, res) => {
    const { username, password, first_name, last_name, address, email, phone_num } = req.body;

    // check if username already exists
    pool.query(queries.checkUsersExists, [username], (error, results) => {
        const exists = results.rows.length;

        if(exists) {
            res.status(409).send("The username already exists!");
        };
        
        pool.query(queries.addNewUser, [username, password, first_name, last_name, address, email, phone_num], (error, results) => {
            if(error) {
                res.status(404).send('error!');
            } else {
                res.status(200).send(`The username has been sucessfully added!`);
            };
        });
    });
};


// read: show all users
const getUsers = (req, res) => {

    pool.query(queries.getUsers, (error, results) => {
        if(error) {
            res.status(404).send('database not found');    
        } else {
            res.status(200).send(results.rows);
        };
    });
};

// read: show a specific user by ID
const getUsersById = (req, res) => {

    const id = parseInt(req.params.id);

    pool.query(queries.getUsersById, [id], (error, results) => {
        if(error) {
            res.status(404).send('database not found');
        } else {
            res.status(200).send(results.rows);
        };
    });
};

// update: amend user details
const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { username, password, first_name, last_name, address, email, phone_num } = req.body;

    pool.query(queries.getUsersById, [id], (error, results) => {
        const userNotFound = !results.rows.length;

        if(userNotFound) {
            res.status(404).send('The user ID does not exists in the databse!');
        };

        // username update
        pool.query(queries.updateUserPass, [username, id], (error, results) => {
            if(error) {
                res.status(404).send('The user does not exists in the databse!');
            } else {
                res.status(200).send('The username has been sucessfully amended!')
            };
        });

        // password update
        pool.query(queries.updateUserPass, [password, id], (error, results) => {
            if(error) {
                res.status(404).send('The user does not exists in the databse!');
            } else {
                res.status(200).send('The password has been sucessfully amended!')
            };
        });

        // first-name update
        pool.query(queries.updateUserPass, [first_name, id], (error, results) => {
            if(error) {
                res.status(404).send('The user does not exists in the databse!');
            } else {
                res.status(200).send('The first name has been sucessfully amended!')
            };
        });

        // last-name update
        pool.query(queries.updateUserPass, [last_name, id], (error, results) => {
            if(error) {
                res.status(404).send('The user does not exists in the databse!');
            } else {
                res.status(200).send('The last name has been sucessfully amended!')
            };
        });
        
        // address update
        pool.query(queries.updateUserPass, [address, id], (error, results) => {
            if(error) {
                res.status(404).send('The user does not exists in the databse!');
            } else {
                res.status(200).send('The address has been sucessfully amended!')
            };
        });

        // email update
        pool.query(queries.updateUserPass, [email, id], (error, results) => {
            if(error) {
                res.status(404).send('The user does not exists in the databse!');
            } else {
                res.status(200).send('The email address has been sucessfully amended!')
            };
        });

        // phone numner update
        pool.query(queries.updateUserPass, [phone_num, id], (error, results) => {
            if(error) {
                res.status(404).send('The user does not exists in the databse!');
            } else {
                res.status(200).send('The phone number has been sucessfully amended!')
            };
        });
    });
};

// delete: remove user
const removeUser = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getUsersById, [id], (error, results) => {
        const userNotFound = !results.rows.length;

        if(userNotFound) {
            res.status(404).send('The user does not exists in the databse!');
        };

        pool.query(queries.removeUser, [id], (error, results) => {
            if(error) {
                res.status(404); 
            } else {
                res.status(200).send('The user has been sucessfully removed!');
            };
        });
    });
};


module.exports = {
    addNewUser,
    getUsers,
    getUsersById,
    removeUser,
    updateUser,
};