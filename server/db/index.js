'use strict';
var Promise = require('bluebird');
var chalk = require('chalk');

var DATABASE_URI = "mongodb://localhost:27017/nwind2";

var mongoose = require('mongoose');
var db = mongoose.connect(DATABASE_URI).connection;

// Require our models -- these should register the model into mongoose
// so the rest of the application can simply call mongoose.model('User')
// anywhere the User model needs to be used.
require('./models');

var startDbPromise = new Promise(function (resolve, reject) {
  db.on('open', resolve);
  db.on('error', reject);
});

console.log(chalk.yellow('Opening connection to MongoDB . . .'));
startDbPromise.then(function () {
  console.log(chalk.green('MongoDB connection opened!'));
});

//i would export the models separately--- I think this makes your app less mongoose dependent and eliminates some coupling
//i would also export a connect() object which will enable you to connect to the database.
module.exports = startDbPromise;
