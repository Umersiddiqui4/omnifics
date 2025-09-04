'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      id: 1,
      icon: 'bi-laptop',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center',
      fallbackImage: '/assets/img/services-1.jpg',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Modern Technologies'],
      link: '#portfolio',
      color: '#4A90E2'
    },
    {
      id: 2,
      icon: 'bi-phone',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop&crop=center',
      fallbackImage: '/assets/img/services-2.jpg',
      features: ['iOS & Android', 'Cross Platform', 'Native Performance', 'User Experience'],
      link: '#portfolio',
      color: '#5BA0F2'
    },
    {
      id: 3,
      icon: 'bi-palette',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that enhance user experience and engagement.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop&crop=center',
      fallbackImage: '/assets/img/services-3.jpg',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
      link: '#portfolio',
      color: '#5BA0F2'
    },
    {
      id: 4,
      icon: 'bi-graph-up',
      title: 'Digital Marketing',
      description: 'Strategic digital marketing solutions to grow your online presence and reach.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center',
      fallbackImage: '/assets/img/services-4.jpg',
      features: ['SEO & SEM', 'Social Media', 'Content Strategy', 'Analytics'],
      link: '#portfolio',
      color: '#4A90E2'
    },
    {
      id: 5,
      icon: 'bi-gear',
      title: 'Technical Support',
      description: 'Ongoing technical support and maintenance to keep your digital solutions running smoothly.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop&crop=center',
      fallbackImage: '/assets/img/services-5.jpg',
      features: ['24/7 Support', 'Regular Updates', 'Performance Monitoring', 'Security'],
      link: '#contact',
      color: '#4A90E2'
    },
    {
      id: 6,
      icon: 'bi-cloud',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions for modern applications.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop&crop=center',
      fallbackImage: '/assets/img/services-6.jpg',
      features: ['AWS/Azure', 'Scalability', 'Security', 'Cost Optimization'],
      link: '#contact',
      color: '#5BA0F2'
    }
  ]

  return (
    <section id="services" className="services section light-background">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Our Services</h2>
          <p>Comprehensive digital solutions to help your business grow and succeed</p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="col-lg-4 col-md-6"
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
                    
                    {/* Features - Fixed height */}
                    <div 
                      className="service-features"
                      style={{
                        marginBottom: '1.5rem',
                        minHeight: '3rem' // Fixed height for features
                      }}
                    >
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
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

        {/* Enhanced CTA Section */}
        <div className="services-cta text-center mt-5" data-aos="fade-up" data-aos-delay="600">
          <div 
            style={{
              background: 'linear-gradient(135deg, #4A90E2, #87CEEB)',
              borderRadius: '25px',
              padding: '3rem 2rem',
              color: '#ffffff',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <h3 style={{ fontSize: '2rem', color:"white", fontWeight: 700, marginBottom: '1rem' }}>
              Ready to Transform Your Business?
            </h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
              Let's discuss how our services can help you achieve your digital goals
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link 
                href="#contact" 
                className="btn-cta"
                style={{
                  background: '#ffffff',
                  color: '#4A90E2',
                  padding: '1rem 2rem',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span>Start Your Project</span>
                <i className="bi bi-rocket"></i>
              </Link>
              <Link 
                href="#portfolio" 
                style={{
                  background: 'transparent',
                  color: '#ffffff',
                  border: '2px solid #ffffff',
                  padding: '1rem 2rem',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
                }}
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
