'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const logo = "/assets/img/High res.png"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [logoHovered, setLogoHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    // Close any open dropdowns when toggling mobile menu
    setActiveDropdown(null)
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeAllDropdowns = () => {
    setActiveDropdown(null)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${logoHovered ? 'logo-hovered' : ''}`}>
      <div className="container-fluid px-3 px-md-4 d-flex align-items-center justify-content-between">
        {/* Creative Logo */}
        <div className="logo">
          <Link
            href="/"
            className="d-flex align-items-center creative-logo"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          >
            <div>
              <Image src={logo} alt="omnifics logo" width={150} height={30} />
            </div>
          </Link>
        </div>

        {/* Enhanced Desktop Navigation */}
        <nav className="navmenu desktop-nav">
          <ul className="d-flex align-items-center">
            {[
              { href: '/', label: 'Home', icon: 'bi-house' },
              { href: '#about', label: 'About', icon: 'bi-person' },
              { href: '#services', label: 'Services', icon: 'bi-gear' },
              { href: '#team', label: 'Team', icon: 'bi-people' },
              { href: '#contact', label: 'Contact', icon: 'bi-envelope' }
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-link ${hoveredLink === item.href ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredLink(item.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span className="nav-icon" style={{ color: hoveredLink === item.href ? "rgb(54 129 218)" : "#fff" }}>
                    <i className={`bi ${item.icon}`}></i>
                  </span>
                  <span className="nav-text" style={{ color: hoveredLink === item.href ? "rgb(54 129 218)" : "#fff"}}>
                    {item.label}
                  </span>
                  <div className="nav-glow"></div>
                  <div className="nav-underline"></div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>



        {/* Creative Mobile Menu Toggle */}
        {!isMobileMenuOpen && (
        <button
          className={`mobile-nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <div className="hamburger-container">
            <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          </div>
        </button>
        )}
      </div>

      {/* Creative Mobile Navigation Menu */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-backdrop"></div>
        <div className="mobile-nav-content">
          <div className="mobile-nav-header px-3 px-md-4">
            <div className="logo">
               <Link
            href="/"
            className="d-flex align-items-center creative-logo"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          >
            <div>
              <Image src={logo} alt="omnifics logo" width={150} height={30} />
            </div>
          </Link>
            </div>
            <button
              className="mobile-nav-close"
              onClick={toggleMobileMenu}
              aria-label="Close navigation menu"
            >
              <div className="close-icon">
                <div className="close-line close-line-1"></div>
                <div className="close-line close-line-2"></div>
              </div>
            </button>
          </div>

          <nav className="mobile-nav-menu px-3 px-md-4">
            <ul>
              {[
                { href: '/', label: 'Home', icon: 'bi-house', color: '#4A90E2' },
                { href: '#about', label: 'About', icon: 'bi-person', color: '#5BA0F2' },
                { href: '#services', label: 'Services', icon: 'bi-gear', color: '#87CEEB' },
                { href: '#portfolio', label: 'Portfolio', icon: 'bi-grid', color: '#4A90E2' },
                { href: '#team', label: 'Team', icon: 'bi-people', color: '#5BA0F2' },
                { href: '#contact', label: 'Contact', icon: 'bi-envelope', color: '#87CEEB' }
              ].map((item, index) => (
                <li key={item.href} style={{ animationDelay: `${index * 0.1}s` }}>
                  <Link
                    href={item.href}
                    className="mobile-nav-link creative-mobile-link"
                    onClick={closeAllDropdowns}
                    style={{ '--link-color': item.color } as React.CSSProperties}
                  >
                    <div className="mobile-link-icon" >
                      <i className={`bi ${item.icon}`} style={{color: "white !important"}}></i>
                      <div className="icon-glow" ></div>
                    </div>
                    <span className="mobile-link-text">{item.label}</span>
                    <div className="mobile-link-arrow">
                      <i className="bi bi-chevron-right"></i>
                    </div>
                    <div className="mobile-link-bg"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-nav-footer px-3 px-md-4">
            <Link href="#contact" className="mobile-cta-btn creative-mobile-cta" onClick={closeAllDropdowns}>
              <span className="mobile-cta-text">Get Started</span>
              <div className="mobile-cta-glow"></div>
              <i className="bi bi-rocket mobile-cta-icon"></i>
            </Link>
            <div className="mobile-nav-decorations">
              <div className="decoration-circle decoration-1"></div>
              <div className="decoration-circle decoration-2"></div>
              <div className="decoration-circle decoration-3"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeAllDropdowns}
      ></div>
    </header>
  )
}
