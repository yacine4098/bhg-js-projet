"use client"
import React, { useState } from 'react';
import styles from '@/styles/carditem.module.css'


const Card_item = ({ title, description, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyles = {
  };

  const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the overlay background color and opacity as needed
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.2s ease-in-out',
  };

  return (
    <div
    className={`${styles.contcard} flex items-end`}
      style={containerStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`${styles.cardo} container flex flex-col relative`}>
      <img src="/photo-app4-1024x641.jpg" alt={title} className={` ${styles.im} w-full h-full object-cover rounded-md`} />
        <div style={overlayStyles}>
        </div>
        <button className='absolute bottom-0 left-0 right-0 m-auto bg-slate-200 px-5 py-3 font-bold text-black rounded-md opacity-75 hover:opacity-100 transition duration-300 ease-in-out'>Click me</button>

      </div>
    </div>

  );
};

export default Card_item;
