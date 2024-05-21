import React, { useState } from 'react';
import Navbar from './Navbar';
import styles from '@/styles/layout.module.css';

const Layout = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  const handleMouseEnter = (event) => {
    const img = event.currentTarget.querySelector('img');
    if (img) {
      const src = img.getAttribute('src');
      if (!src.endsWith('-h.png')) {
        img.setAttribute('src', src.replace('.png', '-h.png'));
      }
    }
  };

  const handleMouseLeave = (event) => {
    const img = event.currentTarget.querySelector('img');
    if (img) {
      const src = img.getAttribute('src');
      if (src.endsWith('-h.png')) {
        img.setAttribute('src', src.replace('-h.png', '.png'));
      }
    }
  };

  return (
    <div className={`${styles.layout} ${sidebarVisible ? styles.sidebar_visible : ''}`}>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className={`${styles.overlay} ${sidebarVisible ? styles.overlay_visible : ''}`} onClick={closeSidebar}></div>
      <div className={`${styles.sidebar} ${sidebarVisible ? styles.sidebar_visible : ''}`}>
        <div className={styles.sidebar_content}>
          <ul className={styles.sidebar_nav}>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <a href="/" onClick={closeSidebar}>
                <img src="/home.png" alt="Accueil" className={styles.icon} />
                Accueil
              </a>
            </li>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <a href="/about" onClick={closeSidebar}>
                <img src="/about.png" alt="À Propos" className={styles.icon} />
                À Propos
              </a>
            </li>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <a href="/projects" onClick={closeSidebar}>
                <img src="/product.png" alt="Nos Produits" className={styles.icon} />
                Nos Produits
              </a>
            </li>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <a href="/contact" onClick={closeSidebar}>
                <img src="/maill.png" alt="Contact" className={styles.icon} />
                Contact
              </a>
            </li>
          </ul>
          <div className={styles.social_icons}>
            <a href="https://www.facebook.com/bhg.promotion.immobiliere" target="_blank" rel="noopener noreferrer">
              <img src="/facebook.png" alt="Facebook" className={styles.social_icon} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.png" alt="Instagram" className={styles.social_icon} />
            </a>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
