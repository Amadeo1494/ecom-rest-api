const { Router } = require('express');
const controller = require('./controller');

const router = Router();

// CRUD:

// create
router.post('/', controller.addOrder);
// read
router.get('/', controller.getAllOrders);
router.get('/:id', controller.getOrderById);
// update
router.put('/:id', controller.updateOrder);
// delete
router.delete('/:id', controller.removeOrder);

module.exports = router;