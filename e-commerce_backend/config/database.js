import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;

if (!uri) {
  console.error("MONGO_URI is not defined in environment variables");
}

const client = new MongoClient(uri);

async function connectDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    } finally {
        await client.close();
    }
}

export default connectDatabase;