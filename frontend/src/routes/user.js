const express = require('express');
const router = express.Router();
const User = require('../models/User'); 

// PUT endpoint to update user profile
router.put('/profile', async (req, res) => {
  try {
    const userId = req.user.id; // assuming user ID is available
    const updatedData = req.body;

    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true });
    res.json(updatedUser); // send updated user data
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
