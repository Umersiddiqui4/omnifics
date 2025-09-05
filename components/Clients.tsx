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
    { id: 1, logo: '/assets/img/clients/abudhabi.svg' },
    { id: 2, logo: '/assets/img/clients/ads.png' },
    { id: 3, logo: '/assets/img/clients/careers.png' },
    { id: 4, logo: '/assets/img/clients/note.png' },
    { id: 5, logo: '/assets/img/clients/optimize.png' },
    { id: 6, logo: '/assets/img/clients/POSPORT.png' },
    { id: 7, logo: '/assets/img/clients/sicht.png' },
    { id: 8, logo: '/assets/img/clients/smart.svg' },
    { id: 9, logo: '/assets/img/clients/sudo.png' },
    { id: 10, logo: '/assets/img/clients/tech.png' },
    { id: 11, logo: '/assets/img/clients/tpe.png' },
    { id: 12, logo: '/assets/img/clients/zyrous.svg' }
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
                    alt="client.name" 
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
                    alt="client.name"
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
               
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  )
}
