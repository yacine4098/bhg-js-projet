// utils/db.js
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase'; // Adjust the path based on your project structure

export const insertData = async (houseId, houseName, houseDesc, imageUrls, mainUrl) => {
    try {
      // Generate a unique ID for the house
      const data = {
        houseId,
        houseName,
        houseDesc,
        imageUrls,
        mainUrl,
      };
  
      const docRef = await addDoc(collection(db, 'your_collection_name'), data);
      console.log('Document written with ID:', docRef.id);
  
      return docRef.id; // Return the ID of the inserted document
    } catch (error) {
      console.error('Error adding document:', error.message);
      throw error;
    }
  };
  // Helper function to generate a unique ID (for demo purposes)
