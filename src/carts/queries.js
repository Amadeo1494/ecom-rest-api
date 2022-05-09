const getAllCarts = "SELECT * FROM carts";
const getCartById = "SELECT * FROM carts WHERE id = $1";
const checkCartExists = "SELECT s FROM carts s WHERE s.id = $1";
const addNewCart = "INSERT INTO carts (cart_id, user_id, order_id, product_id, product_qty) VALUES ($1, $2, $3, $4, $5)";
const removeCartItems = "DELETE FROM carts WHERE id = $1";
const updateCart = "UPDATE carts SET product_id = $1 WHERE id = $2";

module.exports = {
    getAllCarts,
    getCartById,
    checkCartExists,
    addNewCart,
    removeCartItems,
    updateCart,
};