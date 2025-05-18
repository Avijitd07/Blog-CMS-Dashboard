const User = require('../models/user.entity');
const bcrypt = require('bcryptjs');

class UserRegistrationService {
  constructor() {
    this.userModel = User;
  }

  async register(body) {
    try {
      const { username, email, password } = body;
      const existingUser = await this.userModel.findOne({ $or: [{ username }, { email }] });
      if (existingUser) {
        throw new Error('User already exists with this username or email');
      }

      const encryptedPassword = await bcrypt.hash(password, +process.env.SALT_ROUNDS);
      const user = await this.userModel.create({ username, email, password: encryptedPassword });

      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = { UserRegistrationService };
