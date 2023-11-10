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

// Handle rabbit update form on PUT.
exports.rabbit_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await rabbit.findById( req.params.id)
// Do updates of properties
if(req.body.rabbit_color)
toUpdate.rabbit_color = req.body.rabbit_color;
if(req.body.rabbit_brred) toUpdate.rabbit_breed = req.body.rabbit_breed;
if(req.body.rabbit_price) toUpdate.rabbit_price = req.body.rabbit_price;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

