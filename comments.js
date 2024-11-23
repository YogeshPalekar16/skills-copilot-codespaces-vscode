// Create web server
// Create a new file named comments.js in the routes folder
// Add the following code to comments.js
var express = require('express');
var router = express.Router();
var comments = [];
router.get('/', function(req, res, next) {
    res.json(comments);
});
router.post('/', function(req, res, next) {
    comments.push(req.body);
    res.json(comments);
});
module.exports = router;