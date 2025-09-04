'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Features() {
  const [activeTab, setActiveTab] = useState('design')
  const [isHovered, setIsHovered] = useState(false)

  const features = [
    {
      id: 'design',
      title: 'Creative Design',
      icon: 'bi-palette',
      description: 'Beautiful and intuitive designs that captivate your audience and enhance user experience.',
      image: 'https://media.istockphoto.com/id/1446934118/photo/happy-business-man-listening-to-a-discussion-in-an-office.jpg?s=612x612&w=0&k=20&c=jiGivtsXnV0rZex5PEawRYVyNNzhkntyZDNeLXg7H0A=',
      benefits: [
        'User-centered design approach',
        'Modern UI/UX principles',
        'Responsive design systems',
        'Brand consistency'
      ],
      stats: {
        value: '95%',
        label: 'User Satisfaction'
      }
    },
    {
      id: 'development',
      title: 'Advanced Development',
      icon: 'bi-code-slash',
      description: 'Cutting-edge development using the latest technologies to build robust and scalable solutions.',
      image: 'https://media.istockphoto.com/id/1446934118/photo/happy-business-man-listening-to-a-discussion-in-an-office.jpg?s=612x612&w=0&k=20&c=jiGivtsXnV0rZex5PEawRYVyNNzhkntyZDNeLXg7H0A=',
      benefits: [
        'Modern tech stack',
        'Performance optimization',
        'Security best practices',
        'Scalable architecture'
      ],
      stats: {
        value: '99.9%',
        label: 'Uptime'
      }
    },
    {
      id: 'marketing',
      title: 'Digital Marketing',
      icon: 'bi-graph-up-arrow',
      description: 'Strategic digital marketing solutions that drive traffic, engagement, and conversions.',
      image: 'https://media.istockphoto.com/id/1446934118/photo/happy-business-man-listening-to-a-discussion-in-an-office.jpg?s=612x612&w=0&k=20&c=jiGivtsXnV0rZex5PEawRYVyNNzhkntyZDNeLXg7H0A=',
      benefits: [
        'SEO optimization',
        'Social media strategy',
        'Content marketing',
        'Analytics & reporting'
      ],
      stats: {
        value: '300%',
        label: 'Traffic Increase'
      }
    },
    {
      id: 'support',
      title: '24/7 Support',
      icon: 'bi-headset',
      description: 'Round-the-clock technical support and maintenance to keep your digital solutions running smoothly.',
      image: 'https://media.istockphoto.com/id/1446934118/photo/happy-business-man-listening-to-a-discussion-in-an-office.jpg?s=612x612&w=0&k=20&c=jiGivtsXnV0rZex5PEawRYVyNNzhkntyZDNeLXg7H0A=',
      benefits: [
        '24/7 availability',
        'Quick response times',
        'Proactive monitoring',
        'Regular updates'
      ],
      stats: {
        value: '< 2hrs',
        label: 'Response Time'
      }
    }
  ]

  const activeFeature = features.find(feature => feature.id === activeTab)

  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Why Choose Us</h2>
          <p>Discover the key features that make us the perfect partner for your digital success</p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <div className="features-image-wrapper">
              <div 
                className="features-image"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Image
                  src={activeFeature?.image || 'https://geediting.com/wp-content/uploads/2024/03/Men-who-are-successful-in-life-often-display-these-behaviors-without-realizing-it.png'}
                  alt={activeFeature?.title || 'Features'}
                  width={600}
                  height={400}
                  className="img-fluid rounded-4"
                  priority
                  onError={(e) => {
                    // Fallback to a default image if the main image fails
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://geediting.com/wp-content/uploads/2024/03/Men-who-are-successful-in-life-often-display-these-behaviors-without-realizing-it.png';
                  }}
                />
                <div 
                  className="features-overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #4a90e2, rgba(39, 61, 78, 0.75))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 1,
                    borderRadius: '20px',
                    zIndex: 999,
                    pointerEvents: 'none'
                  }}
                >
                  {activeFeature && (
                    <div 
                      className="feature-stats"
                      style={{
                        textAlign: 'center',
                        color: '#ffffff',
                        padding: '2.5rem',
                        background: 'rgba(255, 255, 255, 0.15)',
                        borderRadius: '20px',
                        backdropFilter: 'blur(15px)',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                        pointerEvents: 'auto'
                      }}
                    >
                      <div 
                        className="stat-value"
                        style={{
                          fontSize: '3.5rem',
                          fontWeight: 800,
                          fontFamily: 'var(--heading-font)',
                          marginBottom: '0.75rem',
                          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4)',
                          background: 'linear-gradient(45deg, #ffffff, #f8f9fa)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          lineHeight: 1
                        }}
                      >
                        {activeFeature.stats.value}
                      </div>
                      <div 
                        className="stat-label"
                        style={{
                          fontSize: '1.2rem',
                          fontWeight: 600,
                          opacity: 0.95,
                          textTransform: 'uppercase',
                          letterSpacing: '1.5px',
                          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
                          lineHeight: 1.2
                        }}
                      >
                        {activeFeature.stats.label}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
            <div className="features-content">
              <h3 className="features-subtitle">Our Core Features</h3>
              <h2 className="features-title">Delivering Excellence in Every Project</h2>
              
              <div className="features-tabs">
                <div className="tab-navigation">
                  {features.map((feature) => (
                    <button
                      key={feature.id}
                      className={`tab-button ${activeTab === feature.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(feature.id)}
                    >
                      <div className="tab-icon">
                        <i className={`bi ${feature.icon}`}></i>
                      </div>
                      <div className="tab-content">
                        <span className="tab-title">{feature.title}</span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="tab-pane active">
                  <h4>{activeFeature?.title}</h4>
                  <p className="feature-description">{activeFeature?.description}</p>
                  
                  <div className="feature-benefits">
                    <h5>Key Benefits:</h5>
                    <ul className="benefits-list">
                      {activeFeature?.benefits.map((benefit, index) => (
                        <li key={index}>
                          <i className="bi bi-check-circle-fill"></i>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="feature-cta">
                    <a href="#contact" className="btn-feature">
                      <span>Get Started</span>
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="features-grid" data-aos="fade-up" data-aos-delay="300">
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={feature.id} className="col-lg-3 col-md-6">
                <div className="feature-card">
                  <div className="feature-card-icon">
                    <i className={`bi ${feature.icon}`}></i>
                  </div>
                  <h5>{feature.title}</h5>
                  <p>{feature.description}</p>
                  <div className="feature-card-stats">
                    <span className="stat-value">{feature.stats.value}</span>
                    <span className="stat-label">{feature.stats.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
