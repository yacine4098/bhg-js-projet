


// components/ImageUploadForm.js
import React from 'react';

const ImageUploadForm = ({ onImageUpload }) => {
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      console.error('Image file not provided');
      return;
    }

    try {
      const reader = new FileReader();

      reader.onloadend = async () => {
        const imageData = {
          name: file.name,
          data: reader.result.split(',')[1], // Extracting base64 data
        };

        try {
          const response = await fetch('/api/images/upload', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ files: { image: imageData } }),
          });

          if (response.ok) {
            const data = await response.json();
            onImageUpload(data.imageUrl);
          } else {
            console.error('Error uploading image:', await response.text());
          }
        } catch (error) {
          console.error('Error uploading image:', error.message);
        }
      };

      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error reading image file:', error.message);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
    </div>
  );
};

export default ImageUploadForm;
