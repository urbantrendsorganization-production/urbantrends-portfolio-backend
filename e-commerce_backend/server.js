import express from "express";
import connectDatabase from "./config/database.js";
import productRoutes from './src/Routes/ProductsRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDatabase();

app.use('/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});