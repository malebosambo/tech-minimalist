'use client';

import { useState } from 'react';
import Navigation from './navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function header() {
  
  const [ mobileMenu, setMobileMenu ] = useState(false);

  const showMenu = () => setMobileMenu(!mobileMenu);  
  
  return (
    <div className="Header">
      <div className="Logo">
        <div>
          <Link href="/"><Image src="/Tech-Minimalist-Logo.jpeg" alt="Tech Minimalist Logo" height={50} width={50} /></Link>
        </div>
        <div className="Mobile-Menu" style={{padding: "20px"}}>
          <button onClick={showMenu} className={ !mobileMenu ? "" : "Menu" }>=</button>
          <button onClick={showMenu} className={ mobileMenu ? "" : "Menu" }>X</button>
        </div>
      </div>  
      <div className={ mobileMenu ? "Menu-Visible" : "Menu" }>
        <Navigation />
      </div>
    </div>
  );
}