const router = require('express').Router();
const { Continent } = require('../models');
// Import the custom middleware
const withAuth = require('../auth');