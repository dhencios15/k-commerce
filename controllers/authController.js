const asyncHandler = require('express-async-handler');

const AppError = require('../utils/appError');
const User = require('../models/userModel');
const { createSendToken } = require('../utils/jwtHandler');

exports.signup = asyncHandler(async (req, res) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  });

  createSendToken(newUser, 201, res);
});
