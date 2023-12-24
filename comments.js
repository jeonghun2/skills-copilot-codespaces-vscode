// Create web server
// 1. Create web server
// 2. Create a route for /comments
// 3. Create a route for /comments/new
// 4. Create a route for /comments/:id
// 5. Create a route for /comments/:id/edit
// 6. Create a route for /comments/:id/delete
// 7. Create a route for /comments/:id/update
// 8. Create a route for /comments/:id/destroy

// 1. Create web server
const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController.js');

// 2. Create a route for /comments
router.get('/', commentsController.index);

// 3. Create a route for /comments/new
router.get('/new', commentsController.new);

// 4. Create a route for /comments/:id
router.get('/:id', commentsController.show);

// 5. Create a route for /comments/:id/edit
router.get('/:id/edit', commentsController.edit);

// 6. Create a route for /comments/:id/delete
router.get('/:id/delete', commentsController.delete);

// 7. Create a route for /comments/:id/update
router.post('/:id/update', commentsController.update);

// 8. Create a route for /comments/:id/destroy
router.post('/:id/destroy', commentsController.destroy);

module.exports = router;