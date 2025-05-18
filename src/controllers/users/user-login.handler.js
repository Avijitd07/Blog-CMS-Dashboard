const User = require('../../models/user.entity');
const {  AuthService } = require('../../service/auth.service');

async function userLogin(req, res) {
    try {
        const { email, password } = req.body;

        const authService = new AuthService();
        const { user, token } = await authService.login(email, password);

        req.session.token = token;

        res.status(200).json({
            status: true,
            message: 'User logged in successfully.',
            token,
            user: {
                id: user._id,
                name: user.username,
                email: user.email,
            },
        });

    } catch (error) {
        console.log('userLogin :: Error:', error.message);
        res.status(500).json({ status: false, message: 'Server error' });
    }
};

module.exports = { userLogin };