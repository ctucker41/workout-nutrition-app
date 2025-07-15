import { Router } from 'express';
import bcrypt from 'bcrypt';
import pool from '../../utils/db';

const router = Router();

router.post('/signup', async (req, res) => {
    const { name, email, password, height, weight, goal } = req.body;

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
            `INSERT INTO users (name, email, password_hash, height, weight, goal)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, name, email, height, weight, goal, created_at`,
            [name, email, hashedPassword, height, weight, goal]
        );

        res.status(201).json({ user: result.rows[0] });
    } catch (err) {
        console.error('Signup Error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;