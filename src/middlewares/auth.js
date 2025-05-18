const jwt = require('jsonwebtoken');

async function authorization(req, res, next) {
    try {
        const token = req.session.token;
        if (!token) {
            return res.status(401).json({ status: false, message: 'Unauthorized' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.log('Error:', error.message);
        res.status(500).json({ status: false, message: 'Server error' });
    }
};

module.exports = { authorization };