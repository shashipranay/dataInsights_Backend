import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import authRoutes from './routes/auth.js';
import connectDB from './utils/db.js';

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Root route
app.get('/', (req, res) => {
    res.json({ message: 'API is running' });
});

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

// Only start the server if not in a Vercel environment
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

// Export the Express API for Vercel
export default app; 