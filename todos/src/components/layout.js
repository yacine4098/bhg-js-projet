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
              <FontAwesomeIcon icon={faHome} /> Home
            </a>
          </li>
          <li>
            <a href="/about" onClick={closeSidebar}>
              <FontAwesomeIcon icon={faInfoCircle} /> About
            </a>
          </li>
          <li>
            <a href="/services" onClick={closeSidebar}>
              <FontAwesomeIcon icon={faBriefcase} /> Our Services
            </a>
          </li>
          <li>
            <a href="/projects" onClick={closeSidebar}>
              <FontAwesomeIcon icon={faProjectDiagram} /> Our Projects
            </a>
          </li>
          <li>
            <a href="/investment" onClick={closeSidebar}>
              <FontAwesomeIcon icon={faHandHoldingUsd} /> Investment
            </a>
          </li>
          <li>
            <a href="/contact" onClick={closeSidebar}>
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </a>
          </li>
        </ul>
        <div className={styles.social_icons}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
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