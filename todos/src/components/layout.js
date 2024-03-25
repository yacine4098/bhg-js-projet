import React, { useState } from 'react';
import Navbar from './Navbar';
import styles from '@/styles/layout.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faInfoCircle,
  faBriefcase,
  faProjectDiagram,
  faHandHoldingUsd,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Layout = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <div className={`${styles.layout} ${sidebarVisible ? styles.sidebar_visible : ''}`}>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className={`${styles.overlay} ${sidebarVisible ? styles.overlay_visible : ''}`} onClick={closeSidebar}></div>
      <div className={`${styles.sidebar} ${sidebarVisible ? styles.sidebar_visible : ''}`}>
        <ul className={styles.sidebar_nav}>
          <li>
            <a href="/" onClick={closeSidebar}>
              <FontAwesomeIcon icon={faHome} /> Accueil
            </a>
          </li>
          <li>
            <a href="/about" onClick={closeSidebar}>
              <FontAwesomeIcon icon={faInfoCircle} /> À Propos
            </a>
          </li>

          <li>
            <a href="/projects" onClick={closeSidebar}>
              <FontAwesomeIcon icon={faProjectDiagram} /> Nos Produits
            </a>
          </li>

          <li>
            <a href="/contact" onClick={closeSidebar}>
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </a>
          </li>
        </ul>
        <div className={styles.social_icons}>
          <a href="https://www.facebook.com/bhg.promotion.immobiliere" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;