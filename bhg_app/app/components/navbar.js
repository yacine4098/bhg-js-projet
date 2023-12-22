// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Your Logo</div>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Our Projects</Link></li>
        <li><Link href="/services">Our Services</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
