import React, { useState, useRef, useEffect } from 'react';

const ImageWithButton = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  const handleImageClick = (index) => {
    const currentImageLink = images[index].link;
    window.location.href = currentImageLink;
  };

  useEffect(() => {
    // Start interval for automatic image change
    intervalRef.current = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
    }, 5000); // Change image every 0.5 seconds

    return () => {
      // Clear interval when component unmounts
      clearInterval(intervalRef.current);
    };
  }, [currentImageIndex, images]);

  const imageStyle = {
    transition: 'transform 0.5s ease',
    transform: `translateX(-${currentImageIndex * 100}%)`,
  };

  return (
    <div className="w-full flex justify-center">
      <div className="relative w-[85%] rounded-lg overflow-hidden">
        <div className="flex" style={imageStyle}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt="Your Image"
              className="w-full rounded-lg cursor-pointer"
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
        <div className="absolute bottom-[4%] left-0 w-full flex justify-center">
          {images.map((image, index) => (
            <button
              key={index}
              className={`w-4 h-3 mx-1 rounded-full ${currentImageIndex === index ? 'bg-black' : 'bg-gray-400'}`}
              onClick={() => handleImageChange(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageWithButton;
