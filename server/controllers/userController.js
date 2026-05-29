const joi = require('joi');
const User = require('../models/User');
const { AppError } = require('../middleware/errorMiddleware');
const { logger } = require('../middleware/errorMiddleware');

// ─── Validation Schemas ─────────
const registerSchema = joi.object({
  name: joi.string().trim().max(50).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).max(128).required(),
});

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

// ─── Async Handler Wrapper ──────
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// ─── @desc   Register a new user
// ─── @route  POST /api/users/register
// ─── @access Public
const registerUser = asyncHandler(async (req, res) => {
  // Validate input
  const { error, value } = registerSchema.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
  });
  if (error) {
    const messages = error.details.map((d) => d.message).join(', ');
    throw new AppError(messages, 400);
  }

  const { name, email, password } = value;

  // Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new AppError('User already exists', 400);
  }

  // Create user
  const user = await User.create({ name, email, password });

  // Generate tokens
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  // Send response
  res.status(201).json({
    success: true,
    data: {
      _id: user._id,
      name: user.name,
      email: user.email,
      accessToken,
      refreshToken,
    },
  });

  logger.info(`User registered: ${email}`);
});

// ─── @desc   Login user
// ─── @route  POST /api/users/login
// ─── @access Public
const loginUser = asyncHandler(async (req, res) => {
  // Validate input
  const { error, value } = loginSchema.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
  });
  if (error) {
    const messages = error.details.map((d) => d.message).join(', ');
    throw new AppError(messages, 400);
  }

  const { email, password } = value;

  // Find user by email and include password
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new AppError('Invalid email or password', 401);
  }

  // Check password
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    throw new AppError('Invalid email or password', 401);
  }

  // Generate tokens
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  res.status(200).json({
    success: true,
    data: {
      _id: user._id,
      name: user.name,
      email: user.email,
      accessToken,
      refreshToken,
    },
  });

  logger.info(`User logged in: ${email}`);
});

// ─── @desc   Get current user profile
// ─── @route  GET /api/users/me
// ─── @access Private
const getMe = asyncHandler(async (req, res) => {
  // req.user is set by auth middleware
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    data: {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
  });
});

// ─── @desc   Refresh access token
// ─── @route  POST /api/users/refresh
// ─── @access Public (with valid refresh token)
const refreshToken = asyncHandler(async (req, res) => {
  const { refreshToken: token } = req.body;

  if (!token) {
    throw new AppError('Refresh token required', 400);
  }

  const jwt = require('jsonwebtoken');
  const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);

  const user = await User.findById(decoded.id);
  if (!user) {
    throw new AppError('Invalid refresh token', 401);
  }

  const newAccessToken = user.generateAccessToken();
  const newRefreshToken = user.generateRefreshToken();

  res.status(200).json({
    success: true,
    data: {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    },
  });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
  refreshToken,
};