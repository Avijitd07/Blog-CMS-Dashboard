const User = require('../../models/user.entity');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function userLogin(req, res) {
    try { 
        const { email, password } = req.body;
        
        const user = await User.findOne({email: email});
        if(!user) return res.status(401).json({ message: 'Invalid credentials' });

        const verifiedPassword = await bcrypt.compare(password, user.password);
        if(!verifiedPassword) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({
            userId: user._id.toString(),
        }, 
        'GYXCVOUEWGD72EYHD2HFIOUE2GFOCBWQOUYF23456', 
        { expiresIn: '1h' });

        res.status(200).json({
            status: true,
            message: 'User logged in successfully.',
            token: token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
            }
        });


    } catch (error) {
        console.log('Error:', error.message);
        res.status(500).json({ status: false, message: 'Server error' });
    }
};

module.exports = { userLogin };