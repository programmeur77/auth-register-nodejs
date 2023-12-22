const mongoose = require('mongoose');
const express = require('express');

const { getOneUser, createUser } = require('./../controllers/user-controller');

const router = express.Router();

router.post('/register', createUser);

module.exports = router;
