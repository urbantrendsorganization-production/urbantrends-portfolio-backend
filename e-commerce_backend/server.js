import express from "express";
import connectDatabase from "./config/database.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDatabase()
    .then(() => {})
    .catch((error) => {
        console.error("Database connection error:", error);
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});