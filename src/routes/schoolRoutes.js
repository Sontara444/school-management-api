const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const schoolController = require('../controllers/schoolController');

// Route: POST /addSchool
// Description: Add a new school to the database
router.post('/addSchool', [
    body('name').notEmpty().withMessage('Name is required').isString(),
    body('address').notEmpty().withMessage('Address is required').isString(),
    body('latitude').isFloat({ min: -90, max: 90 }).withMessage('Latitude must be between -90 and 90'),
    body('longitude').isFloat({ min: -180, max: 180 }).withMessage('Longitude must be between -180 and 180')
], schoolController.addSchool);

// Route: GET /listSchools
// Description: List all schools sorted by proximity to a user-provided location
router.get('/listSchools', schoolController.listSchools);

module.exports = router;
