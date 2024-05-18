// ext.js
const { initializeApp } = require('firebase/app');
const { getStorage, ref, listAll, getDownloadURL } = require('firebase/storage');
const { getFirestore, doc, setDoc } = require('firebase/firestore');

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvkXpHDRdu-0gTW8joxJQX_sUpwe9T268",
  authDomain: "bhg-cloud.firebaseapp.com",
  projectId: "bhg-cloud",
  storageBucket: "bhg-cloud.appspot.com",
  messagingSenderId: "104316574452",
  appId: "1:104316574452:web:74f198023a1e51f738dca1",
  measurementId: "G-K46VJGF4VX"
};
// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the default storage service
const storage = getStorage(app);

// Get a reference to the Firestore database
const firestore = getFirestore(app);

// Function to fetch download URLs for all images in a folder
const getAllImageUrls = async (folderPath) => {
  try {
    const imageUrls = [];

    // Create a reference to the specified folder
    const folderRef = ref(storage, folderPath);

    // List all items (images) in the folder
    const listResult = await listAll(folderRef);

    // Iterate over each item (image) in the folder
    for (const item of listResult.items) {
      // Get the download URL for the image
      const downloadURL = await getDownloadURL(item);

      // Push the download URL to the array
      imageUrls.push(downloadURL);
    }

    // Return the array of download URLs
    return imageUrls;
  } catch (error) {
    console.error('Error fetching download URLs:', error.message);
    throw error;
  }
};

// Function to upload image URLs to Firestore
// Function to upload image URLs to Firestore
const uploadImageUrlsToFirestore = async (collectionName, documentId, imageUrls) => {
    try {
      // Get a reference to the Firestore document with the specified document ID
      const docRef = doc(firestore, collectionName, documentId);
  
      // Set the document data with the imageUrls array, performing a merge operation
      await setDoc(docRef, { imageUrls }, { merge: true });
  
      console.log('Image URLs uploaded to Firestore successfully.');
    } catch (error) {
      console.error('Error uploading image URLs to Firestore:', error.message);
      throw error;
    }
  };
  

// Usage example
const folderPath = '/images/lesDunes';
const collectionName = 'your_collection_name';
const documentId = '4FonJHnDF5AMWd3raD1E';

getAllImageUrls(folderPath)
  .then(imageUrls => {
    uploadImageUrlsToFirestore(collectionName, documentId, imageUrls);
  })
  .catch(error => {
    console.error('Error:', error);
  });


