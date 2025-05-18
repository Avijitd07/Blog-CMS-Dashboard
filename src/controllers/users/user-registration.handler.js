const { UserRegistrationService } = require('../../service/user-registration.service');

async function userRegistration(req, res) {
  try {
    const body = req.body;

    const userRegistrationService = new UserRegistrationService();
    const user = await userRegistrationService.register(body);

    res.status(201).json({ status: true, message: 'User registered successfully.', data: user });
  } catch (error) {
    console.log('userRegistration :: Error:', error.message);
    res.status(500).json({ status: false, message: 'Server error' });
  }
};

module.exports = { userRegistration };