// pages/ChooseMainImage.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Modal from 'react-modal'; // Import Modal from react-modal
import styles from '@/styles/ChooseMainImage.module.css';
import { insertData } from '@/utils/db'; // Import the insertData function

const ChooseMainImage = () => {
  const router = useRouter();
  const { id, houseName, houseDesc, imageUrls } = router.query;

  const [parsedImageUrls, setParsedImageUrls] = useState([]);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Parse the JSON strings into arrays when imageUrls change
    try {
      if (imageUrls) {
        const parsedUrls = JSON.parse(imageUrls);
        setParsedImageUrls(parsedUrls);
      }
    } catch (error) {
      console.error('Error parsing imageUrls:', error.message);
    }
  }, [imageUrls]);

  const handleMainImageSelect = async () => {
    try {
      const mainImageUrl = parsedImageUrls[mainImageIndex];

      // Add the main URL to Firestore using the insertData function
      await insertData(id, houseName, houseDesc, parsedImageUrls, mainImageUrl);

      // Open the modal
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error inserting data to Firestore:', error.message);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    router.push('/dashboard');
  };

  return (
    <div className={styles.container}>
      <h2>Select Main Image</h2>
      <div className={styles.imageGrid}>
        {parsedImageUrls.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            onClick={() => setMainImageIndex(index)}
            className={`${styles.image} ${mainImageIndex === index ? styles.selected : ''}`}
          />
        ))}
      </div>
      <button onClick={handleMainImageSelect} className={styles.button}>
        Select Main Image
      </button>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Success Modal"
        overlayClassName={styles.modal}
        className={styles.content}
      >
        <h2 className={styles.h2}>Success!</h2>
        <p className={styles.p}>Data successfully inserted.</p>
        <button className={styles.closeButton} onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default ChooseMainImage;
