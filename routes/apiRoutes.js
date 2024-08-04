const express = require('express');
const router = express.Router();
const { user } = require('../controllers');

router.post('/addMeal', user.addMeal);
router.get('/searchFood', user.searchFood);

module.exports = router;
