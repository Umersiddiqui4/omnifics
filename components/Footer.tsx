'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const logo = "/assets/img/High res.png"

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubscribing(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubscribeStatus('success')
      setEmail('')
      setTimeout(() => setSubscribeStatus('idle'), 5000)
    } catch (error) {
      setSubscribeStatus('error')
      setTimeout(() => setSubscribeStatus('idle'), 5000)
    } finally {
      setIsSubscribing(false)
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="footer"
      className="footer"
      style={{
        background: '#10151b', // dark background
        color: '#bdbdbd',      // light text
        paddingTop: '4rem',
        paddingBottom: '2rem'
      }}
    >
      <div className="container footer-top">
        <div className="row gy-4 gy-md-5">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6 col-12 footer-about">
             <Link
            href="/"
            className="d-flex align-items-center creative-logo"
          >
            <div>
              <Image src={logo} alt="Omnifics" width={250} height={50} />
            </div>
          </Link>
            
            <p
              style={{
                color: '#bdbdbd', // lighter text
                lineHeight: 1.6,
                marginTop: '1.5rem',
                fontSize: '1rem'
              }}
            >
              Empowering businesses with innovative digital solutions. We transform ideas into reality 
              through cutting-edge technology, creative design, and strategic thinking.
            </p>

            <div
              className="footer-contact pt-4"
              style={{
                background: '#10151b',
                borderRadius: '15px',
                padding: '1.5rem',
                border: '1px solid #10151b'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <i
                  className="bi bi-geo-alt-fill"
                  style={{ color: 'var(--text-accent)', marginRight: '0.75rem', fontSize: '1.1rem', marginTop: '0.25rem', flexShrink: 0 }}
                ></i>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <p style={{ margin: 0, color: '#666666', wordBreak: 'break-word' }}>
                    123 Innovation Drive, Tech Valley
                  </p>
                  <p style={{ margin: 0, color: '#888888', fontSize: '0.9rem' }}>
                    San Francisco, CA 94025
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <i
                  className="bi bi-telephone-fill"
                  style={{ color: 'var(--text-accent)', marginRight: '0.75rem', fontSize: '1.1rem', marginTop: '0.25rem', flexShrink: 0 }}
                ></i>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <p style={{ margin: 0, color: '#666666', wordBreak: 'break-word' }}>
                    <strong>Phone:</strong> <span>+92 300 9221711</span>
                  </p>
                  <p style={{ margin: 0, color: '#888888', fontSize: '0.9rem' }}>
                    Mon-Fri 9AM-6PM PST
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <i
                  className="bi bi-envelope-fill"
                  style={{ color: 'var(--text-accent)', marginRight: '0.75rem', fontSize: '1.1rem', marginTop: '0.25rem', flexShrink: 0 }}
                ></i>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <p style={{ margin: 0, color: '#666666', wordBreak: 'break-word' }}>
                    <strong>Email:</strong> <span>info@omnifics.io</span>
                  </p>
                  <p style={{ margin: 0, color: '#888888', fontSize: '0.9rem' }}>
                    Response within 2 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="social-links d-flex flex-wrap mt-4" style={{ gap: '0.75rem' }}>
              {[
                { platform: 'twitter', icon: 'bi-twitter-x', url: '#' },
                { platform: 'facebook', icon: 'bi-facebook', url: '#' },
                { platform: 'instagram', icon: 'bi-instagram', url: '#' },
                { platform: 'linkedin', icon: 'bi-linkedin', url: '#' },
                { platform: 'youtube', icon: 'bi-youtube', url: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  style={{
                    width: '45px',
                    height: '45px',
                    background: '#e9ecef',
                    color: '#444444',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    border: '1px solid #dee2e6',
                    flexShrink: 0
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#4a90e2'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(234, 146, 35, 0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#e9ecef'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <i className={`bi ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-3 col-6 footer-links">
            <h4
              style={{
                color: '#f5f5f5', // heading color
                fontSize: '1.3rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
                position: 'relative'
              }}
            >
              Quick Links
              <div 
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: 0,
                  width: '30px',
                  height: '3px',
                  background: '#4a90e2',
                  borderRadius: '2px'
                }}
              ></div>
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { text: 'Home', url: '#home' },
                { text: 'About Us', url: '#about' },
                { text: 'Services', url: '#services' },
                { text: 'Portfolio', url: '#portfolio' },
                { text: 'Team', url: '#team' },
                { text: 'Contact', url: '#contact' }
              ].map((link, index) => (
                <li 
                  key={index}
                  style={{
                    marginBottom: '0.75rem',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <i 
                    className="bi bi-chevron-right"
                    style={{ 
                      color: '#4a90e2', 
                      marginRight: '0.5rem', 
                      fontSize: '0.8rem',
                      transition: 'transform 0.3s ease'
                    }}
                  ></i>
                  <a 
                    href={link.url}
                    style={{
                      color: '#666666',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      fontSize: '0.95rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#4a90e2'
                      const icon = e.currentTarget.previousElementSibling as HTMLElement
                      if (icon) icon.style.transform = 'translateX(3px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#666666'
                      const icon = e.currentTarget.previousElementSibling as HTMLElement
                      if (icon) icon.style.transform = 'translateX(0)'
                    }}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-2 col-md-3 col-6 footer-links">
            <h4
              style={{
                color: '#f5f5f5',
                fontSize: '1.3rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
                position: 'relative'
              }}
            >
              Our Services
              <div 
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: 0,
                  width: '30px',
                  height: '3px',
                  background: '#4a90e2',
                  borderRadius: '2px'
                }}
              ></div>
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { text: 'Web Design', url: '#services' },
                { text: 'Web Development', url: '#services' },
                { text: 'Mobile Apps', url: '#services' },
                { text: 'Digital Marketing', url: '#services' },
                { text: 'UI/UX Design', url: '#services' },
                { text: 'Cloud Solutions', url: '#services' }
              ].map((service, index) => (
                <li 
                  key={index}
                  style={{
                    marginBottom: '0.75rem',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <i 
                    className="bi bi-chevron-right"
                    style={{ 
                      color: '#4a90e2', 
                      marginRight: '0.5rem', 
                      fontSize: '0.8rem',
                      transition: 'transform 0.3s ease'
                    }}
                  ></i>
                  <a 
                    href={service.url}
                    style={{
                      color: '#666666',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      fontSize: '0.95rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#4a90e2'
                      const icon = e.currentTarget.previousElementSibling as HTMLElement
                      if (icon) icon.style.transform = 'translateX(3px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#666666'
                      const icon = e.currentTarget.previousElementSibling as HTMLElement
                      if (icon) icon.style.transform = 'translateX(0)'
                    }}
                  >
                    {service.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4 col-md-12 footer-newsletter">
            <h4
              style={{
                color: '#f5f5f5',
                fontSize: '1.3rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
                position: 'relative'
              }}
            >
              Stay Updated
              <div 
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: 0,
                  width: '30px',
                  height: '3px',
                  background: '#4a90e2',
                  borderRadius: '2px'
                }}
              ></div>
            </h4>
            
            <p style={{ color: '#bdbdbd', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Get the latest insights, industry trends, and exclusive offers delivered directly to your inbox. 
              Stay ahead of the curve with our expert content.
            </p>

            <form onSubmit={handleNewsletterSubmit} style={{ marginBottom: '1rem' }}>
              <div
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                  flexDirection: 'column'
                }}
                className="newsletter-form-container"
              >
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  style={{
                    flex: 1,
                    padding: '0.75rem 1rem',
                    border: '1px solid #222831',
                    borderRadius: '8px',
                    background: '#181c22', // dark input
                    color: '#f5f5f5',
                    fontSize: '0.9rem',
                    width: '100%',
                    marginBottom: '0.5rem'
                  }}
                  required
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: '#4a90e2',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 600,
                    cursor: isSubscribing ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    whiteSpace: 'nowrap',
                    width: '100%',
                    maxWidth: '200px',
                    alignSelf: 'flex-start'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubscribing) {
                      e.currentTarget.style.background = '#E43E2B'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubscribing) {
                      e.currentTarget.style.background = '#4a90e2'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }
                  }}
                >
                  {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>

              {/* Newsletter Status Messages */}
              {subscribeStatus === 'success' && (
                <div 
                  style={{
                    background: 'rgba(40, 167, 69, 0.2)',
                    color: '#28a745',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    border: '1px solid rgba(40, 167, 69, 0.3)'
                  }}
                >
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Successfully subscribed! Welcome to our community.
                </div>
              )}

              {subscribeStatus === 'error' && (
                <div 
                  style={{
                    background: 'rgba(220, 53, 69, 0.2)',
                    color: '#dc3545',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    border: '1px solid rgba(220, 53, 69, 0.3)'
                  }}
                >
                  <i className="bi bi-exclamation-triangle-fill me-2"></i>
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
            <div style={{ color: '#888', fontSize: '0.85rem' }}>
              <i className="bi bi-shield-check me-2"></i>
              We respect your privacy. Unsubscribe at any time.
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        style={{
          borderTop: '1px solid #222831',
          marginTop: '3rem',
          paddingTop: '2rem'
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p style={{ color: '#bdbdbd', margin: 0, marginBottom: '1rem' }}>
                © {currentYear} <strong style={{ color: '#4a90e2' }}>Omnifics</strong>. All Rights Reserved.
              </p>
            </div>
            <div className="col-12 text-center">
              <div style={{ color: '#888', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                  <a
                    href="#"
                    style={{ color: '#888', textDecoration: 'none' }}
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    style={{ color: '#888', textDecoration: 'none' }}
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#"
                    style={{ color: '#888', textDecoration: 'none' }}
                  >
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
