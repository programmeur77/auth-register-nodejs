const mongoose = require('mongoose');
const express = require('express');

const { getOneUser, createUser } = require('./../controllers/user-controller');
const { limitRate } = require('../middlewares/rate-limiter');

const router = express.Router();

router.post('/signin', limitRate, getOneUser);
router.post('/register', createUser);

module.exports = router;
