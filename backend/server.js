require('dotenv').config();

const express = require('express');

const userRoutes = require('./routes/user-routes');
const { dbConnect } = require('./config/db-connect');

const app = express();

app.use(express.json());

app.use('/api/user', userRoutes);

if (dbConnect) {
    console.log('MongoDB connection success');
  app.listen(4000);
} else {
    console.log('MongoDB connection failed');
}

app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'Server running !' });
});

