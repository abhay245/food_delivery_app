const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = 'fg9rdjy4mrifm0rgje9j8tdj9df9';
router.post(
  '/createuser',
  body('email').isEmail(),
  body('password', 'Password must be at least 5 characters long').isLength({ min: 5 }),
  body('name').isLength({ min: 5 }),
  async (req, res) => {
    // Validation using express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    try {
      // Create a new user using the User model
      await User.create({
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        password: hashedPassword,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error: 'Error creating user' });
    }
  }
);
router.post('/login',
  body('email').isEmail(),
  body('password', 'Password must be at least 5 characters long').isLength({ min: 5 }),
  async (req, res) => {
    // Validation using express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      // Find the user in the database
      const userData = await User.findOne({ email });
      if (!userData) {
        return res.status(400).json({ errors: 'Invalid credentials' });
      }

      // Compare the password with the hashed password in the database
      const isPasswordMatch = await bcrypt.compare(password, userData.password);
      if (!isPasswordMatch) {
        return res.status(400).json({ errors: 'Invalid credentials' });
      }

      // Generate JWT token
      const tokenPayload = {
        user: {
          id: userData.id,
          email: userData.email, 
        },
      };
      const authToken = jwt.sign(tokenPayload, jwtSecret);

      // Send the authentication token in the response
      return res.json({ success: true, authToken });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error: 'Error logging in' });
    }
  }
);
module.exports = router;
