import mongoose from 'mongoose';

const connectToMongodb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);  // No need for deprecated options
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Could not connect to MongoDB", error);
    }
};

export default connectToMongodb;
