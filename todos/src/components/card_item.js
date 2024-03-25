// components/Card_item.js
import React, { useState } from 'react';
import styles from '@/styles/carditem.module.css';
import Link from 'next/link';

const Card_item = ({ id, title, description, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyles = {};

  const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.2s ease-in-out',
  };

  return (
    <Link href={{ pathname: '/gal', query: { id } }}>
      <div>
        <div
          className={`${styles.contcard} flex items-end`}
          style={containerStyles}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`${styles.cardo} container flex flex-col relative`}>
            <img src={imageUrl} alt={title} className={`${styles.im} w-full h-full object-cover rounded-md`} />
            <div style={overlayStyles}></div>
            <button className="absolute bottom-0 left-0 right-0 m-auto bg-slate-200 px-5 py-3 font-bold text-black rounded-md opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
              {title}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card_item;
