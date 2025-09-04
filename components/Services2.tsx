'use client'

import { useState } from 'react'

export default function Services2() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      icon: 'bi bi-briefcase',
      title: 'Strategic Consulting',
      description: 'Expert business strategy consulting to help you identify opportunities, optimize operations, and achieve sustainable growth in today\'s competitive market.',
      features: ['Market Analysis', 'Business Planning', 'Process Optimization'],
      stats: '85%',
      metric: 'Success Rate'
    },
    {
      icon: 'bi bi-code-slash',
      title: 'Custom Development',
      description: 'Tailored software solutions built with cutting-edge technologies to meet your specific business requirements and scale with your growth.',
      features: ['Web Applications', 'Mobile Apps', 'API Integration'],
      stats: '200+',
      metric: 'Projects Delivered'
    },
    {
      icon: 'bi bi-graph-up-arrow',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies that drive traffic, increase conversions, and build lasting relationships with your target audience.',
      features: ['SEO Optimization', 'Social Media', 'Content Strategy'],
      stats: '300%',
      metric: 'Traffic Increase'
    },
    {
      icon: 'bi bi-shield-check',
      title: 'Cybersecurity',
      description: 'Robust security solutions to protect your digital assets, ensure compliance, and maintain customer trust in an evolving threat landscape.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance'],
      stats: '99.9%',
      metric: 'Security Score'
    },
    {
      icon: 'bi bi-cloud-arrow-up',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to optimize performance, reduce costs, and ensure business continuity.',
      features: ['Cloud Migration', 'DevOps', 'Monitoring'],
      stats: '50%',
      metric: 'Cost Reduction'
    },
    {
      icon: 'bi bi-headset',
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance services to keep your systems running smoothly and minimize downtime.',
      features: ['Technical Support', 'Maintenance', 'Monitoring'],
      stats: '< 2hrs',
      metric: 'Response Time'
    }
  ]

  return (
    <section id="services-2" className="services-2 section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Services</h2>
        <p>Comprehensive solutions to drive your business forward</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
              <div 
                className="service-item-enhanced"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                style={{
                  position: 'relative',
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '2rem',
                  height: '100%',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transform: hoveredService === index ? 'translateY(-10px)' : 'translateY(0)',
                  border: '1px solid rgba(74, 144, 226, 0.1)',
                  overflow: 'hidden'
                }}
              >
                {/* Hover overlay */}
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.95), rgba(39, 61, 78, 0.9))',
                    opacity: hoveredService === index ? 1 : 0,
                    transition: 'all 0.4s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10
                  }}
                >
                  <div style={{ textAlign: 'center', color: '#ffffff', padding: '1rem' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                      {service.stats}
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: 600, opacity: 0.9 }}>
                      {service.metric}
                    </div>
                  </div>
                </div>

                {/* Service content */}
                <div style={{ position: 'relative', zIndex: 5 }}>
                  <div 
                    style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #4A90E2, #87CEEB)',
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <i 
                      className={service.icon} 
                      style={{ 
                        fontSize: '1.8rem', 
                        color: '#ffffff',
                        transform: hoveredService === index ? 'scale(1.1)' : 'scale(1)',
                        transition: 'transform 0.3s ease'
                      }}
                    ></i>
                  </div>

                  <h4 
                    className="title"
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      marginBottom: '1rem',
                      color: '#273d4e',
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {service.title}
                  </h4>

                  <p 
                    className="description"
                    style={{
                      color: '#666',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem',
                      fontSize: '0.95rem'
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: '0.5rem',
                          fontSize: '0.9rem',
                          color: '#555'
                        }}
                      >
                        <i 
                          className="bi bi-check-circle-fill"
                          style={{
                            color: '#4A90E2',
                            marginRight: '0.5rem',
                            fontSize: '0.8rem'
                          }}
                        ></i>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div style={{ textAlign: 'center' }}>
                    <button
                      style={{
                        background: 'linear-gradient(135deg, #4A90E2, #87CEEB)',
                        color: '#ffffff',
                        border: 'none',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '25px',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        transform: hoveredService === index ? 'scale(1.05)' : 'scale(1)',
                        boxShadow: hoveredService === index ? '0 8px 25px rgba(74, 144, 226, 0.4)' : '0 4px 15px rgba(74, 144, 226, 0.2)'
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Decorative elements */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.1), rgba(39, 61, 78, 0.1))',
                    borderRadius: '50%',
                    opacity: hoveredService === index ? 1 : 0.3,
                    transition: 'all 0.3s ease'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}
