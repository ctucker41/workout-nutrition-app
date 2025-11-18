import dotenv from 'dotenv';
dotenv.config();

import { Pool } from 'pg';


const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

(async () => {
    try {
        await pool.query("SELECT 1");
        console.log("✅ Connected to database successfully");
    } catch (err) {
        console.error("❌ Database connection failed:", err);
    }
})();

export default pool;