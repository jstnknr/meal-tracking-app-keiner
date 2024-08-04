const express = require('express');
const router = express.Router();
const { auth } = require('../controllers');

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/protected', authMiddleware, (req, res) => {
  res.render('protected');
});

module.exports = router;
