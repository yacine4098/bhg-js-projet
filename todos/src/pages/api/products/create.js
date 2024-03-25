// pages/api/products/create.js
import { query } from '@/lib/db';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { id, name, description, images } = req.body;

  console.log('Received data:', { id, name, description, images });

  try {
    // Insert product data into the products table
    const productInsertResult = await query({
      sql: 'INSERT INTO products (id, name, description) VALUES (?, ?, ?)',
      values: [id, name, description],
    });

    // Get the ID of the inserted product
    const productId = productInsertResult.insertId;

    // Insert image data into the product_images table
    await Promise.all(
      images.map(async (imageUrl) => {
        await query({
          sql: 'INSERT INTO product_images (product_id, image_url) VALUES (?, ?)',
          values: [productId, imageUrl],
        });
      })
    );

    res.status(201).json({ success: true });
  } catch (error) {
    console.error('Error inserting product:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
