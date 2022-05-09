const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "ecom",
    password: "password",
    port: 5432,
});

// // "products" connection check:
// pool.connect()
// .then(() => console.log("Connected successfully"))
// .then(() => pool.query("SELECT * FROM products ORDER BY id"))
// .then(results => console.table(results.rows))
// .catch(e => console.log(e))
// .finally(() => pool.end());

// // "users" connection check:
// pool.connect()
// .then(() => console.log("Connected successfully"))
// .then(() => pool.query("SELECT * FROM users ORDER BY id"))
// .then(results => console.table(results.rows))
// .catch(e => console.log(e))
// .finally(() => pool.end());

module.exports = pool;
