const { Router } = require('express');
const controller = require('./controller');

const router = Router();

// CRUD:

// create
router.post('/', controller.addNewUser);
// read
router.get('/', controller.getUsers);
router.get('/:id', controller.getUsersById);
// update
router.put('/:id', controller.updateUser);
// delete
router.delete('/:id', controller.removeUser);

module.exports = router;