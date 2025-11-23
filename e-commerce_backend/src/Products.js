import connectDatabase from "../config/database.js";

// we will need endpoints for adding products, getting products, updating products, and deleting products.
export const addProduct = async (req, res) => {
    try {
        const db = await connectDatabase();
        const { name, price, image, category, description, sizes, colors } = req.body;
        const newProduct = { name, price, image, category, description, sizes, colors };
        if (!name || !price || !image || !category) {
            return res.status(400).json({ message: "Missing required fields" });
        };
        const exists = await db.collection("products").findOne({ name });
        if (exists) {
            return  res.status(409).json({ message: "Product with this name already exists. try another name" });
        }
        const result = await db.collection("products").insertOne(newProduct);
        res.status(201).json({ message: "Product added successfully", productId: result.insertedId });
    } catch (error) {
        res.status(500).json({ message: "Error adding product", error: error.message });
    }
}

// get all products
export const getProducts = async (req, res) => {
    try {
        const db = await connectDatabase();
        const products = await db.collection("products").find({}).toArray();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error: error.message });
    }
}