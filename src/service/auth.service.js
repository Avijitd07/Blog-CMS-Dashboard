const User = require('../models/user.entity');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class AuthService {
    constructor() {
        this.userModel = User;
    }

    async login(email, password) {
        const user = await this.userModel.findOne({ email: email });
        if (!user) {
            throw new Error('User not found');
        }


        const verifiedPassword = await bcrypt.compare(password, user.password);
        if (!verifiedPassword) {
            throw new Error('Invalid password');
        }

        const payload = { userId: user._id.toString() };
        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' });

        return { token, user };
    }

    async logout(session) {
        return new Promise((resolve, reject) => {
            session.destroy((err) => {
                if (err) {
                    console.log('logout :: Error:', err.message);
                    return reject(new Error('Session destruction failed'));
                }
                console.log('logout :: Session destroyed successfully');
                return resolve(true);
            });
        });
    }
}

module.exports = { AuthService };