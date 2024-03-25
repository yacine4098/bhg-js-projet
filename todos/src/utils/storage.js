// utils/storage.js
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '@/lib/firebase'; // Adjust the path based on your project structure

export const uploadImages = async (houseId, imageFiles) => {
  try {
    const imageUrls = [];

    for (const file of imageFiles) {
      const storageRef = ref(storage, `images/${houseId}/${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      imageUrls.push(downloadURL);
    }

    return imageUrls;
  } catch (error) {
    console.error('Error uploading images:', error.message);
    throw error;
  }
};

