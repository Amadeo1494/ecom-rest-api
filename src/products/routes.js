const { Router } = require('express');
const controller = require('./controller');

const router = Router();

// CRUD:

// create
router.post('/', controller.addProduct);
// read
router.get('/', controller.getProducts);
router.get('/:id', controller.getProductById);
// update
router.put('/:id', controller.updateProduct);
// delete
router.delete('/:id', controller.removeProduct);

module.exports = router;