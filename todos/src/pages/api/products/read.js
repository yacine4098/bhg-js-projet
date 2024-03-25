// pages/api/products/read.js
import { query } from '@/lib/db';

export default async function handler(req, res) {
  try {
    // Fetch product data from the database
    const products = await query({
      sql: 'SELECT id, image_url FROM product_images', // Adjust columns based on your table structure
    });

    // Send the products array as the response
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
