"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
            <Link className="navbar-brand" href="/">
                <i className="fas fa-mosque me-2"></i>
                Jamia Shere Rabbani Mananwala
            </Link>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded={!isNavCollapsed ? true : false} 
                aria-label="Toggle navigation"
                onClick={handleNavCollapse}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${pathname === '/about' ? 'active' : ''}`} href="/about">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${pathname === '/courses' ? 'active' : ''}`} href="/courses">Courses</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${pathname === '/teachers' ? 'active' : ''}`} href="/teachers">Teachers</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${pathname === '/news' ? 'active' : ''}`} href="/news">News</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${pathname === '/admission' ? 'active' : ''}`} href="/admission">Admission</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${pathname === '/contact' ? 'active' : ''}`} href="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${pathname === '/donation' ? 'active' : ''}`} href="/donation">Donation</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}
