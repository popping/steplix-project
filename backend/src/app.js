const { json } = require('express');
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index.routes');

// Initialize
const app = express();

// settings
app.set('PORT', process.env.HTTP_PORT || 3000);

// middleware
app.use(morgan('dev'));
app.use(express.json())

// routes
app.use('/', routes);

module.exports = app;