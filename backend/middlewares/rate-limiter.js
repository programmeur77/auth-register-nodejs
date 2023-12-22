const { rateLimit } = require('express-rate-limiter');

const limiter = () => {
  rateLimit({
    windowMs: 60 * 1000, // 1 hour in Milliseconds
    max: 5, // Maximum 5 requests per hour
    message: 'You have reached the maximum limit of request for the next hour',
    standardHeaders: true,
    legacyHeaders: true,
  });
};

module.exports = { limiter };
