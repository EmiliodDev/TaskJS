const bcrypt = require('bcryptjs');
const User = require('../db/models/user');

const registerUser = async (req, res) => {
    try {
        const { username, password, email} = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            username,
            password: hashedPassword,
            email
        });

        await user.save();

        res.status(201).json({ message: 'User created' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong"});
    };
}

module.exports = { registerUser };
