'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Clients() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 1 // Adjust speed here (lower = faster)

    const animate = () => {
      scrollPosition += scrollSpeed
      
      // Reset position when we've scrolled the width of one set of logos
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Pause animation on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId)
    }

    const handleMouseLeave = () => {
      animate()
    }

    scrollContainer.addEventListener('mouseenter', handleMouseEnter)
    scrollContainer.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter)
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const clients = [
    { id: 1, name: 'TechCorp', logo: '/assets/img/clients/client-1.png' },
    { id: 2, name: 'InnovateLab', logo: '/assets/img/clients/client-2.png' },
    { id: 3, name: 'DigitalFlow', logo: '/assets/img/clients/client-3.png' },
    { id: 4, name: 'FutureTech', logo: '/assets/img/clients/client-4.png' },
    { id: 5, name: 'SmartSolutions', logo: '/assets/img/clients/client-5.png' },
    { id: 6, name: 'NextGen', logo: '/assets/img/clients/client-6.png' },
    { id: 7, name: 'CloudWorks', logo: '/assets/img/clients/client-1.png' },
    { id: 8, name: 'DataDrive', logo: '/assets/img/clients/client-2.png' },
    { id: 9, name: 'AIConnect', logo: '/assets/img/clients/client-3.png' },
    { id: 10, name: 'WebCraft', logo: '/assets/img/clients/client-4.png' },
    { id: 11, name: 'MobileFirst', logo: '/assets/img/clients/client-5.png' },
    { id: 12, name: 'DevStudio', logo: '/assets/img/clients/client-6.png' }
  ]

  return (
    <section id="clients" className="clients section light-background">
      <div className="container" data-aos="fade-up">
        <div className="section-title text-center mb-5">
          <h2>Trusted by Industry Leaders</h2>
          <p>We're proud to work with innovative companies worldwide</p>
        </div>

        <div className="clients-scroll-container">
          <div 
            ref={scrollRef}
            className="clients-scroll-track"
            style={{
              display: 'flex',
              gap: '3rem',
              padding: '2rem 0',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              cursor: 'grab'
            }}
          >
            {/* First set of logos */}
            {clients.map((client) => (
              <div 
                key={client.id}
                className="client-logo-item"
                style={{
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  minWidth: '150px'
                }}
              >
                <div 
                  style={{
                    background: '#ffffff',
                    borderRadius: '15px',
                    padding: '1.5rem',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <Image 
                    src={client.logo} 
                    alt={client.name} 
                    width={120} 
                    height={60}
                    style={{
                      objectFit: 'contain',
                      filter: 'grayscale(100%)',
                      transition: 'filter 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = 'grayscale(0%)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'grayscale(100%)'
                    }}
                  />
                </div>
                <span 
                  style={{
                    fontSize: '0.9rem',
                    color: '#666',
                    fontWeight: 500,
                    textAlign: 'center'
                  }}
                >
                  {client.name}
                </span>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {clients.map((client) => (
              <div 
                key={`duplicate-${client.id}`}
                className="client-logo-item"
                style={{
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  minWidth: '150px'
                }}
              >
                <div 
                  style={{
                    background: '#ffffff',
                    borderRadius: '15px',
                    padding: '1.5rem',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <Image 
                    src={client.logo} 
                    alt={client.name} 
                    width={120} 
                    height={60}
                    style={{
                      objectFit: 'contain',
                      filter: 'grayscale(100%)',
                      transition: 'filter 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = 'grayscale(0%)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'grayscale(100%)'
                    }}
                  />
                </div>
                <span 
                  style={{
                    fontSize: '0.9rem',
                    color: '#666',
                    fontWeight: 500,
                    textAlign: 'center'
                  }}
                >
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-4">
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#666',
              fontSize: '0.9rem'
            }}
          >
            <i className="bi bi-arrow-left-right"></i>
            <span>Scroll to see more clients</span>
          </div>
        </div>
      </div>
    </section>
  )
}
