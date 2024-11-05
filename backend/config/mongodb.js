import mongoose from "mongoose";

const connectDB = async () => {
    // set up listeners for MongoDB connection events
    mongoose.connection.on('connected', () => {
        console.log("DB Connected");
    });

    mongoose.connection.on('error', (error) => {
        console.error("MongoDB connection error:", error);
        process.exit(1); // exit on connection failure
    });

    mongoose.connection.on('disconnected', () => {
        console.log("MongoDB disconnected. Attempting to reconnect...");
    });

    // connect to MongoDB with additional options
    await mongoose.connect(process.env.MONGODB_URI, {
        dbName: 'e-commerce', // specify the database name
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

export default connectDB;
