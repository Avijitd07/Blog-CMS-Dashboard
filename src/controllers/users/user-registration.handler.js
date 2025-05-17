const User = require('../../models/user.entity');
const bcrypt = require('bcryptjs');

async function userRegistration(req, res) {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) return res.status(400).json({ message: 'User already in exist.' });

    const encryptedUserPassword = await bcrypt.hash(password, 10);

    const user = await user.create({ username, email, password: encryptedUserPassword });

    res.status(201).json({ status: true, message: 'User registered successfully.', data: user });
  } catch (error) {
    console.log('Error:', error.message);
    res.status(500).json({ status: false, message: 'Server error' });
  }
};

module.exports = { userRegistration };