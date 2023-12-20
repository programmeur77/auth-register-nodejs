const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  uniqueKey: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('User', userSchema);
