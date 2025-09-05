'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      id: 1,
      icon: 'bi-phone-fill',
      title: 'Frontend & Mobile Development',
      description: 'Modern web and mobile applications built with cutting-edge frameworks for exceptional user experiences.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&crop=center',
      fallbackImage: '/assets/img/services-1.jpg',
      features: ['React', 'Angular', 'Vue', 'Flutter', 'React Native'],
      link: '#portfolio',
      color: '#4A90E2'
    },
    {
      id: 2,
      icon: 'bi-server',
      title: 'Backend & Database Solutions',
      description: 'Robust backend systems and database architectures designed for performance, security, and scalability.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop&crop=center',
      fallbackImage: '/assets/img/services-2.jpg',
      features: ['Node.js', 'Java', '.NET', 'Python', 'PostgreSQL', 'MongoDB'],
      link: '#contact',
      color: '#50C878'
    },
    {
      id: 3,
      icon: 'bi-cloud',
      title: 'Cloud & DevOps Services',
      description: 'Complete cloud infrastructure and DevOps solutions for modern application deployment and management.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop&crop=center',
      fallbackImage: '/assets/img/services-3.jpg',
      features: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'GCP'],
      link: '#contact',
      color: '#F39C12'
    }
  ]

  return (
    <section id="services" className="services section light-background">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Our Offered Services</h2>
          <p>Professional solutions tailored to meet your business needs and drive success</p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="col-lg-4 col-md-6 d-flex justify-content-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div 
                className="service-item-enhanced"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transform: hoveredService === service.id ? 'translateY(-10px)' : 'translateY(0)',
                  border: '1px solid rgba(74, 144, 226, 0.1)',
                  height: '600px', // Fixed height for all cards
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Service Image - Fixed Height */}
                <div 
                  className="service-image-container"
                  style={{
                    position: 'relative',
                    height: '200px', // Fixed image height
                    overflow: 'hidden',
                    flexShrink: 0 // Prevent image from shrinking
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = service.fallbackImage
                    }}
                  />
                  
                  {/* Hover Overlay */}
                  <div 
                    className="service-overlay"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, ${service.color}dd, rgba(39, 61, 78, 0.9))`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: hoveredService === service.id ? 1 : 0,
                      transition: 'all 0.4s ease'
                    }}
                  >
                    <div 
                      className="service-icon"
                      style={{
                        width: '80px',
                        height: '80px',
                        background: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid rgba(255, 255, 255, 0.3)'
                      }}
                    >
                      <i 
                        className={`bi ${service.icon}`}
                        style={{
                          fontSize: '2rem',
                          color: '#ffffff'
                        }}
                      ></i>
                    </div>
                  </div>

                  {/* Service Badge */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: service.color,
                      color: '#ffffff',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {service.id.toString().padStart(2, '0')}
                  </div>
                </div>
                
                {/* Service Content - Flexible but controlled */}
                <div 
                  className="service-content"
                  style={{
                    padding: '2rem',
                    flex: 1, // Take remaining space
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  {/* Top content section */}
                  <div>
                    <h4 
                      className="service-title"
                                              style={{
                          fontSize: '1.4rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          marginBottom: '1rem',
                          transition: 'color 0.3s ease',
                          minHeight: '2.8rem', // Fixed height for title
                          display: 'flex',
                          alignItems: 'center'
                        }}
                    >
                      <Link 
                        href={service.link}
                        style={{
                          color: 'inherit',
                          textDecoration: 'none',
                          transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = service.color}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                      >
                        {service.title}
                      </Link>
                    </h4>
                    
                    <p 
                      className="service-description"
                      style={{
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        marginBottom: '1.5rem',
                        fontSize: '0.95rem',
                        minHeight: '4.5rem', // Fixed height for description
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {service.description}
                    </p>
                    
                    {/* Features - Dynamic height */}
                    <div
                      className="service-features"
                      style={{
                        marginBottom: '1.5rem'
                      }}
                    >
                      {service.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex} 
                          className="feature-tag"
                                                  style={{
                                                  background: 'rgba(74, 144, 226, 0.1)',
                                                  color: 'var(--text-accent)',
                                                  padding: '0.3rem 0.8rem',
                                                  borderRadius: '15px',
                                                  fontSize: '0.8rem',
                                                  fontWeight: 500,
                                                  marginRight: '0.5rem',
                                                  display: 'inline-block',
                                                  marginBottom: '0.5rem',
                                                  transition: 'all 0.3s ease'
                                                }}
                                                  onMouseEnter={(e) => {
                                                    e.currentTarget.style.background = '#4A90E2'
                                                    e.currentTarget.style.color = '#ffffff'
                                                  }}
                                                  onMouseLeave={(e) => {
                                                    e.currentTarget.style.background = 'rgba(74, 144, 226, 0.1)'
                                                    e.currentTarget.style.color = 'var(--text-accent)'
                                                  }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Button - Fixed at bottom */}
                  <div 
                    className="service-actions"
                    style={{
                      textAlign: 'center',
                      marginTop: 'auto' // Push to bottom
                    }}
                  >
                    <Link 
                      href={service.link} 
                      className="service-link"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                        color: '#ffffff',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '25px',
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.3s ease',
                        boxShadow: `0 4px 15px ${service.color}40`
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)'
                        e.currentTarget.style.boxShadow = `0 8px 25px ${service.color}60`
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.boxShadow = `0 4px 15px ${service.color}40`
                      }}
                    >
                      Learn More
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  )
}
