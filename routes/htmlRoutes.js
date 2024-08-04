const express = require('express');
const router = express.Router();
const { auth, user } = require('../controllers');
const authMiddleware = require('../middleware/auth');

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/protected', authMiddleware, user.getProfile);

router.post('/login', auth.login);
router.post('/signup', auth.signup);
router.get('/logout', auth.logout);

module.exports = router;
