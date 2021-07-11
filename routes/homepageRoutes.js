const router = require('express').Router();
// will need to add more 
const { Continent } = require('../models');
// Import the custom middleware
const withAuth = require('../auth');
//routes for continent
router.get