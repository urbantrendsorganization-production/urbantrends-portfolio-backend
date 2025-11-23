import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;

if (!uri) {
  console.error("MONGO_URI is not defined in environment variables");
}

let db; // store the database instance

async function connectDatabase() {
  try {
    if (db) return db; // reuse the connection

    const client = await MongoClient.connect(uri);
    console.log("Connected to MongoDB");

    db = client.db("ecommerce_db"); // your DB name
    return db;

  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw error;
  }
}

export default connectDatabase;
