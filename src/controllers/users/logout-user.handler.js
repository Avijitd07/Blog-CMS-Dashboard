const { AuthService } = require("../../service/auth.service");


async function logoutUser( req, res ) {
    try {
        const authService = new AuthService();
        const destroyed = await authService.logout(req.session);

        if (destroyed) {
            res.clearCookie('connect.sid');
            res.status(200).json({ status: true, message: 'User logged out successfully.' });
        }
    } catch (error) {
        console.log('Error:', error.message);
        res.status(500).json({ status: false, message: 'Server error' });
    }
};

module.exports = { logoutUser };