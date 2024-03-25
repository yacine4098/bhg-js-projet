import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import styles from '@/styles/Navbar.module.css';

const Navbar = ({ toggleSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 140) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      {/* Navbar with position fixed */}
      <div className={`${styles.navbar} ${!isScrolled ? '' : styles.hidden}`}>
        <div className={styles.logo}>
          <a href='/'>
            <Image src="/BHG-LOGO.png" alt="Logo" width={160} height={160} />
          </a>
        </div>
        <ul className={`${styles.navList} hidden sm:flex`}>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/about">À Propos</Link>
          </li>
          <li>
            <Link href="/projects">Nos Produits</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <button className='display sm:hidden mr-3' onClick={toggleSidebar}>
          <img width={32} src="menu.png" alt="Sidebar Icon" className={styles.icon} />
        </button>
      </div>

      {/* Navbar with position sticky */}
      <div className={`${styles.navbar2} ${isScrolled ? '' : styles.hidden}`}>
        <div className={styles.logo}>
          <a href='/'>
            <Image src="/BHG-LOGO.png" alt="Logo" width={80} height={80} />
          </a>
        </div>
        <ul className={`${styles.navList} hidden sm:flex`}>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/about">À Propos</Link>
          </li>
          <li>
            <Link href="/projects">Nos Produits</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <button className='display sm:hidden mr-3' onClick={toggleSidebar}>
          <img width={32} src="menu.png" alt="Sidebar Icon" className={styles.icon} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
