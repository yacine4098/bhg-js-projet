// pages/api/images/[filename].js
import { createReadStream } from 'fs';

export default function handler(req, res) {
  const { filename } = req.query;
  const imagePath = `public/uploads/${filename}`;

  try {
    const stream = createReadStream(imagePath);
    stream.pipe(res);
  } catch (error) {
    console.error('Error serving image:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
