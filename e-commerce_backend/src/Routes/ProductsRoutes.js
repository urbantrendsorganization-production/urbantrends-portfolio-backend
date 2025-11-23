import express from "express";
import { addProduct, getProducts } from "../Products.js";

const router = express.Router();

// relevant routes here
router.post('/add', addProduct);
router.get('/products', getProducts);

export default router;