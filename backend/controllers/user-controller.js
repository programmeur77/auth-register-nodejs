const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('./../models/User');

const getOneUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (!user)
    return res
      .status(401)
      .json({ error: 'Invalid email/password pair', status: 401 });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid)
    return res
      .status(401)
      .json({ error: 'Invalid email/password pair', status: 401 });

  res.status(200).json({
    id: user._id,
    uniqueKey: user.uniqueKey,
    token: 'TOKEN',
    status: 200,
  });
};

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

module.exports = { getOneUser, createUser };
