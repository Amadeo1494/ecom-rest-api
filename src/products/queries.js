const getProducts = "SELECT * FROM products";
const getProductById = "SELECT * FROM products WHERE id = $1";
const checkSkuExists = "SELECT s FROM products s WHERE s.sku = $1";
const addNewProduct = "INSERT INTO products (sku, artist, album, genre, year, price) VALUES ($1, $2, $3, $4, $5, $6)";
const removeOldProduct = "DELETE FROM products WHERE id = $1";
const updateProduct = "UPDATE products SET price = $1 WHERE id = $2";

module.exports = {
    getProducts,
    getProductById,
    checkSkuExists,
    addNewProduct,
    removeOldProduct,
    updateProduct,
};