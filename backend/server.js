import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import path from 'path'; 
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// Connect to Cloudinary
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// API Endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

// Serve Static Files from React app
app.use(express.static(path.join(__dirname, 'build')));

// Handle React routing, return all requests to React app
// This route declaration must be exactly here, after all API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the Server
app.listen(port, () => {
  console.log(`Server started on PORT: ${port}`);
});
