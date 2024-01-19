import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styles from '@/styles/Navbar.module.css';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className={`${styles.navbar} `}>
      <div className={styles.logo}>
        <Image src="/BHG-LOGO.png" alt="Logo" width={200} height={200} />
      </div>
      <ul className={`${styles.navList} hidden sm:flex`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <button className='display sm:hidden mr-3' onClick={toggleSidebar}>
        <img width={32} src="menu.png" alt="Sidebar Icon" className={styles.icon} />
      </button>
    </nav>
  );
};

export default Navbar;
