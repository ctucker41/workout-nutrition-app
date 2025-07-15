import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import signupRoute from './routes/auth/signup';

const app = express();

app.use(express.json());

app.use('/api/auth', signupRoute);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});