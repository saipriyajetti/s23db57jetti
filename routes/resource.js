var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var rabbit_controller = require('../controllers/rabbit');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// rabbit ROUTES ///
// POST request for creating a rabbit.
router.post('/rabbits', rabbit_controller.rabbit_create_post);
// DELETE request to delete rabbit.
router.delete('/rabbits/:id', rabbit_controller.rabbit_delete);
// PUT request to update rabbit.
router.put('/rabbits/:id', rabbit_controller.rabbit_update_put);
// GET request for one rabbit.
router.get('/rabbits/:id', rabbit_controller.rabbit_detail);
// GET request for list of all rabbit items.
router.get('/rabbits', rabbit_controller.rabbit_list);
module.exports = router;