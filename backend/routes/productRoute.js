const express = require('express');
const axios = require('axios');
const app = express();

// GET /categories/categoryname/products
app.get('/categories/:category/products', async (req, res) => {
    const category = req.params.category;
    const n = parseInt(req.query.n) || 10; // default to 10 products
    const page = parseInt(req.query.page) || 1; // default to page 1

    try {
        // Fetch products from e-commerce companies
        // Example: fetch products from Company 1
        const response = await axios.get(`COMPANY_1_API/categories/${category}/products`, {
            params: {
                n,
                page
            }
        });

        // Extract and format products data
        const products = response.data.map(product => ({
            id: generateUniqueId(), // Generate unique ID for each product
            name: product.name,
            price: product.price,
            // Add other relevant product details
        }));

        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Helper function to generate unique ID for products
function generateUniqueId() {
       return uuidv4();
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
