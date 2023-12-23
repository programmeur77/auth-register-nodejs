const { rateLimit } = require('express-rate-limit');

const limitRate = () => {
  rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 5,
    message: 'Too many attemps, try again in 5 minutes',
  });
};

module.exports = { limitRate };
