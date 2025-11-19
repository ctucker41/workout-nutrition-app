import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from "cors";



import signupRoute from './routes/auth/signup';
import loginRoute from './routes/auth/login';
import deleteRoute from './routes/auth/deleteAccount';

const app = express();

app.use(express.json());
app.use(cors({
    origin: "*",
}));
app.use('/api/auth', signupRoute);
app.use('/api/auth', loginRoute);
app.use('/api/auth', deleteRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});