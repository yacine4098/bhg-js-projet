import React, { useState } from 'react';

const Gallery = ({ mainUrl,images ,name , desc }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [showFullImage, setShowFullImage] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);



  const handleThumbnailClick = (image, index) => {
    setMainImage(image);
    setCurrentIndex(index);
  };

  const handleMainImageClick = () => {
        setShowFullImage(!showFullImage);

    
  };



  const changeContent = (direction) => {
    
    const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
  
    setCurrentIndex((newIndex + images.length) % images.length);
    setMainImage(images[currentIndex]);
  };

  const resetTimer = () => {
    // Implement your timer reset logic if needed
  };
  console.log(images);

  return (
    
    <div className='maindiv'> 

    <div className='conth' >
      <img
        className='imgmth rounded-2xl'
        src={mainImage}
        alt="Main"
        onClick={handleMainImageClick}
      />

      <div className='divth mb-5'>
        {images.map((image, index) => (
          <img
            className='imgth rounded-md'
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            onClick={() => handleThumbnailClick(image, index)}
          />
        ))}
      </div>


      {showFullImage && (
        <div className='full-image-overlay' onClick={handleMainImageClick}>
          <img className='full-image rounded-lg' src={mainImage} alt="Full Image" />

          <div className='arrow-icons'>
            <img
              className='prev-icon'
              src='left.png'
              alt='Previous'
              onClick={(e) => {
                e.stopPropagation();
                changeContent('prev');
              }}
            />
            <img
              className='next-icon'
              src='right.png'
              alt='Next'
              onClick={(e) => {
                e.stopPropagation();
                changeContent('next');
              }}
            />
          </div>
        </div>
      )}
    </div>




    </div>

    
  );
};

export default Gallery;
