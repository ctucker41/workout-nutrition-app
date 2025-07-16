import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../../utils/db';

const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        const user = result.rows[0];

        if (!user) {
            return res.status(401).json({error: 'Email or Password is Incorrect'});
        }

        const validPassword = await bcrypt.compare(password, user.password_hash);
        if (!validPassword) {
            return res.status(401).json({error: 'Email or Password is Incorrect'});
        }

        const token = jwt.sign(
            {email: user.email, id: user.id},
            process.env.JWT_SECRET as string,
            {expiresIn: '1h'}
        );

        res.json({message: 'Login Successful', token});
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

export default router;