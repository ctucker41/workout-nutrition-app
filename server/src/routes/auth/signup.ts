import { Router } from 'express';
import bcrypt from 'bcrypt';
import pool from '../../utils/db';
import dotenv from 'dotenv';

const router = Router();
dotenv.config();

router.post('/signup', async (req, res) => {
    console.log("🔥 Signup route hit:", req.body.email);
    const { name, email, password } = req.body;

    if (!name ) {
        return res.status(400).json({ error: 'Name Field is Required' });
    }
    if (!email) {
        return res.status(400).json({error: 'Email Field is Required'});
    }
    if (!password) {
        return res.status(400).json({error: 'Password Field is Required'});
    }
    try {

        const existing = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (existing.rows.length > 0) {
            return res.status(409).json({ error: 'Account Already Exists With This Email' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await pool.query(
            `INSERT INTO users (name, email, password_hash)
       VALUES ($1, $2, $3)
       RETURNING id, name, email, created_at`,
            [name, email, hashedPassword]
        );

        res.status(201).json({ user: result.rows[0] });
    } catch (err) {
        console.error('Signup Error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;