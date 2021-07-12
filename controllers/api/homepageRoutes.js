const router = require('express').Router();
// Import the custom middleware
const withAuth = require('../auth');
//routes for resources
router.get