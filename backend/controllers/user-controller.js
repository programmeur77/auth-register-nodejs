const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('./../models/User');

const createUser = (req, res) => {

  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      try {
        const user = new User({
          email: req.body.email,
          password: hash,
          uniqueKey: req.body.uniqueKey,
        });
        user
          .save()
          .then((user) => res.status(200).json({ user, status: 200 }))
          .catch((error) => res.status(400).json({ error, status: 400 }));
      } catch (error) {
        res.status(400).json({ error, status: 400 });
      }
    })
    .catch((error) => res.status(400).json({ error, status: 400 }));
};

module.exports = { createUser };
