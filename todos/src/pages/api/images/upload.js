// pages/api/images/upload.js
import fs from 'fs/promises';
import path from 'path';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '5mb', // Adjust the size limit as needed
    },
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { files } = req.body;

    if (!files || !files.image) {
      return res.status(400).json({ error: 'Image file not provided' });
    }

    const file = files.image;

    const uploadDir = path.join(process.cwd(), 'public/uploads');
    const imagePath = path.join(uploadDir, file.name);

    // Ensure the "uploads" directory exists
    await fs.mkdir(uploadDir, { recursive: true });

    // Save the file to the "uploads" directory
    await fs.writeFile(imagePath, file.data, 'base64');

    // Return the URL of the saved image
    const imageUrl = `/uploads/${file.name}`;
    res.status(200).json({ success: true, imageUrl });
  } catch (error) {
    console.error('Error uploading image:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
