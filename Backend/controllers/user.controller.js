const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");

const blacklistTokenModel = require("../models/blackListToken.model");
module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  console.log(req.body); // Log the request body to see its structure

  // Change fullname to fullName to match the request body structure
  const { fullName, email, password } = req.body;

  // Check if fullName is defined
  if (!fullName || !fullName.firstname || !fullName.lastname) {
    return res
      .status(400)
      .json({ message: "Full name with firstname and lastname is required" });
  }

  const hashedPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    firstname: fullName.firstname, // Use fullName here
    lastname: fullName.lastname, // Use fullName here
    email,
    password: hashedPassword,
  });

  const token = user.generateAuthToken();

  res.status(201).json({ token, user });
}

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = user.generateAuthToken();
res.cookie('token', token);


  res.status(200).json({ token, user });
}

module.exports.getUserProfile = async (req, res, next) => {
  res.status(200).json(req.user);
}

module.exports.logoutUser = async (req, res, next) => {
  res.clearCookie('token');
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

await blacklistTokenModel.create({ token });

  res.status(200).json({ message: "Logged out successfully" });
}
