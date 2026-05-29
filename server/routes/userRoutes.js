const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  refreshToken,
} = require('../controllers/userController');
const { auth } = require('../middleware/authMiddleware');

// ─── Public Routes ──────────────
router.post('/register', registerUser);
router.post('/login', loginUser);

// ─── Private Routes ─────────────
router.get('/me', auth, getMe);

// ─── Token Refresh ──────────────
router.post('/refresh', refreshToken);

module.exports = router;