import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import sendEmail from '../utils/email.js';

const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if(existingUser) return res.status(400).json({ error: 'User already exists.' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ firstName, lastName, email, password: hashedPassword });

            const subject = 'Welcome to Our Platform';
            const text= `Hi ${firstName}`;
            const html = `<p>Thank you for registering with Schedly! 🎉 We're excited to help you connect with seminars and events that inspire learning and growth.</p>
                   <p>🔎 Browse Upcoming Seminars: Explore a wide variety of topics and speakers.</p>
                   <p>🗓️ Reserve Your Spot: Easily secure your seat for the seminars that interest you.</p>
                   <p>📜 Manage Your Bookings: Keep track of your reservations in one place.</p>`;


        await sendEmail(email, subject, text, html);

        res.status(201).json({ message: 'User registered successfully', user });

    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid Credentials' });

        const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, user: { id: user._id, name: `${user.firstName} ${user.lastName}`, email: user.email, role: user.role} });
    }catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}

export { register, login };
