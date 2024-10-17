import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongodb.js";  



dotenv.config();  

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());  

// Simple Hello World route
app.get("/", (req, res) => {
    res.send("Hello World");
});


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


app.listen(PORT, async () => {
    try {
        await connectToMongoDB(); 
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
});
