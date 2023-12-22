const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  uniqueKey: { type: String, default: crypto.randomUUID, unique: true },
  createdAt: { type: String, default: new Date().toLocaleString() },
  emailIsVerified: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', userSchema);
