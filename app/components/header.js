'use client';

import { useState } from 'react';
import Navigation from './navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function header() {
  const [ menu, setMenu ] = useState(false);
  
  const mobileMenu = () => {
    if (menu) {
      setMenu(!menu);
      const navIsMobile = "Nav";
      return navIsMobile;
    } else {
      setMenu(!menu);
      const navIsMobile = "Nav Mobile";
      return navIsMobile;
    }
  }
  
  return (
    <>
      <div>
        <Link href="/"><a><Image src="/public/Tech-Minimalist-Logo.jpeg" alt="Tech Minimalist Logo" /></a></Link>
        <button onClick={mobileMenu} className="Mobile_Menu">Menu</button>
      </div>
      <div className={navIsMobile}>
        {Navigation}
      </div>
    </>
  );
}