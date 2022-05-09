const getAllOrders = "SELECT * FROM orders";
const getOrderById = "SELECT * FROM orders WHERE id = $1";
const checkOrderExists = "SELECT s FROM orders s WHERE s.order_id = $1";
const addNewOrder = "INSERT INTO orders (order_id, product_id, product_qty, user_id) VALUES ($1, $2, $3, $4)";
const removeOrder = "DELETE FROM orders WHERE id = $1";
const updateOrder = "UPDATE orders SET product_qty = $1 WHERE id = $2";

module.exports = {
    getAllOrders,
    getOrderById,
    checkOrderExists,
    addNewOrder,
    removeOrder,
    updateOrder,
};