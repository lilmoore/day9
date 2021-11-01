const express = require('express'),
  app = express(),
  routes = require('./routes.js'),
  mongoose = require('mongoose'),
  User = require('./Models/UserModel')

mongoose.connect('mongodb://localhost/users_db');
  
routes(app);

app.listen(3000);


