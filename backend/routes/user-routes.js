const mongoose = require('mongoose');
const express = require('express');

const { getOneUser, createUser } = require('./../controllers/user-controller');
const { limiter } = require('./../middlewares/rate-limiter');

const router = express.Router();

router.get('/signin', limiter, getOneUser);
router.post('/register', createUser);

module.exports = router;
