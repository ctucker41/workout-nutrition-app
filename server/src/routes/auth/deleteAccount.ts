import express from 'express';
import pool from '../../utils/db';
import {AuthenticatedRequest, authenticateToken} from '../../middleware/auth';

const router = express.Router();

router.delete('/account', authenticateToken, async (req: AuthenticatedRequest, res) => {
    try {
        const userId = req.user!.id;

        const result = await pool.query('DELETE FROM users WHERE id = $1', [userId]);

        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'User Already Deleted' });
        }

        res.json({ message: 'Account Deleted Successfully' });
    } catch (error) {
        console.error('Delete error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;