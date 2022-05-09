const express = require('express');

const productRoutes = require('./src/products/routes');
const userRoutes = require('./src/users/routes');
const cartRoutes = require('./src/carts/routes');
const orderRoutes = require('./src/orders/routes');

const app = express();
const port = 3000;

app.use(express.json()); 

app.get("/", (req, res) => {
    res.status(200).send("Received...");
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/orders', orderRoutes);

app.listen(port, () => console.log(`Listening at port ${port}...`));