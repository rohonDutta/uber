const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');

module.exports.registerUser  = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    console.log(req.body); // Log the request body to see its structure

    // Change fullname to fullName to match the request body structure
    const { fullName, email, password } = req.body;

    // Check if fullName is defined
    if (!fullName || !fullName.firstname || !fullName.lastname) {
        return res.status(400).json({ message: 'Full name with firstname and lastname is required' });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser ({
        firstname: fullName.firstname, // Use fullName here
        lastname: fullName.lastname,     // Use fullName here
        email,
        password: hashedPassword
    });

    const token = user.generateAuthToken();

    res.status(201).json({ token, user });
};
