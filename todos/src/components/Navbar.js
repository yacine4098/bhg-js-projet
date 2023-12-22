// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
      <Image src="/logo.png" alt="Logo" width={150} height={150} />
      </div>
      <ul className='navList'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Our Projects</Link></li>
        <li><Link href="/services">Our Services</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
