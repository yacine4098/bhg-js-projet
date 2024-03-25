import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { uploadImages } from '@/utils/storage';
import { auth } from '@/lib/firebase'; // Import Firebase authentication
import { useAuthState } from 'react-firebase-hooks/auth'; // Import useAuthState hook

import styles from '@/styles/dashboard.module.css';

// Function to generate a unique ID
const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9); // Not suitable for production
};

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [houseName, setHouseName] = useState('');
  const [houseDesc, setHouseDesc] = useState('');
  const [imageFiles, setImageFiles] = useState([]);
  const router = useRouter();

  const handleImageUpload = (e) => {
    const files = e.target.files;
    setImageFiles(Array.from(files));
  };

  const handleSubmit = async () => {
    try {
      const id = generateUniqueId();
      const imageUrls = await uploadImages(id, imageFiles);

      // Pass necessary data to the ChooseMainImage page via query params
      router.push({
        pathname: '/ChooseMainImage',
        query: {
          id,
          houseName,
          houseDesc,
          imageFiles: JSON.stringify(imageFiles),
          imageUrls: JSON.stringify(imageUrls),
        },
      });
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign out the user
      router.push('/login'); // Redirect to the login page after successful logout
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  useEffect(() => {
    if (error) {
      console.error('Firebase authentication error:', error.message);
    }
    if (!user && !loading) {
      // If user is not authenticated and loading is complete, redirect to login page
      router.push('/login');
    }
  }, [user, loading, error, router]);

  if (user) {
    return (
      <div className={styles.container}>
        <h1>Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="House Name"
            value={houseName}
            onChange={(e) => setHouseName(e.target.value)}
            className={styles.inputField}
          />
          <textarea
            placeholder="House Description"
            value={houseDesc}
            onChange={(e) => setHouseDesc(e.target.value)}
            className={styles.textareaField}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            multiple
            className={styles.fileInput}
          />
          <button onClick={handleSubmit} className={styles.button}>
            Submit
          </button>
        </div>
      </div>
    );
  }

  // Optionally, you can return a loading spinner or message while authentication is in progress
  return <div>Loading...</div>;
};

export default Dashboard;
