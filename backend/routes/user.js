const express = require('express');
const router = express.Router();

const { auth } = require('../middlewares/auth');
require('../controllers/userController');

router.get('/user', auth, getAllUsers);

module.exports = router;



