const mongoose = require('mongoose');
const express = require('express');

const { activateAccount } = require('./../controllers/mail-controllers');

const router = express.Router();

router.post('/activate/:id', activateAccount);

module.exports = router;
