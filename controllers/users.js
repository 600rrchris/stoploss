const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;


module.exports = {
  signup
};

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    // TODO: Send back a JWT instead of the user
    res.json(user);
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}