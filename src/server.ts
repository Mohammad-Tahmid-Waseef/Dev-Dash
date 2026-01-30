import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import milestoneRoutes from './routes/milestoneRoutes';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route to check if server is alive
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Dev-Dash Server is running!' });
});

// Milestone Routes
app.use('/api/milestones', milestoneRoutes);

// Connect to MongoDB
const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is missing in .env file');
    }
    
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected Successfully');
    
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    process.exit(1);
  }
};

// Start Server
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on http://localhost:${PORT}`);
});