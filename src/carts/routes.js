const { Router } = require('express');
const controller = require('./controller');

const router = Router();

// CRUD:

// create
router.post('/', controller.addNewCart);
// read
router.get('/', controller.getAllCarts);
router.get('/:id', controller.getCartById);
// update
router.put('/:id', controller.updateCart);
// delete
router.delete('/:id', controller.removeCartItems);

module.exports = router;