'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function About() {
  const [activeTab, setActiveTab] = useState('mission')

  const tabs = [
    { id: 'mission', label: 'Our Mission', icon: 'bi-bullseye' },
    { id: 'vision', label: 'Our Vision', icon: 'bi-eye' },
    { id: 'values', label: 'Our Values', icon: 'bi-heart' }
  ]

  const tabContent = {
    mission: {
      title: 'Empowering Digital Growth',
      description: 'We are dedicated to transforming businesses through innovative digital solutions that drive growth, enhance user experiences, and create lasting impact in the digital landscape.',
      features: [
        'Strategic digital transformation',
        'User-centered design approach',
        'Performance-driven development',
        'Continuous innovation focus'
      ]
    },
    vision: {
      title: 'Leading Digital Innovation',
      description: 'To be the premier partner for businesses seeking to thrive in the digital age, known for our creativity, technical excellence, and unwavering commitment to client success.',
      features: [
        'Industry-leading solutions',
        'Cutting-edge technology',
        'Global digital presence',
        'Sustainable growth models'
      ]
    },
    values: {
      title: 'Excellence in Everything',
      description: 'Our core values guide every decision and action, ensuring we deliver exceptional results while maintaining the highest standards of integrity and professionalism.',
      features: [
        'Quality craftsmanship',
        'Client partnership',
        'Innovation mindset',
        'Continuous learning'
      ]
    }
  }

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>About Us</h2>
          <p>Discover our story, mission, and the values that drive us forward</p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <div className="about-image-wrapper">
              <div className="about-image">
                <Image
                  src="/assets/img/about.jpg"
                  alt="About Dewi"
                  width={600}
                  height={400}
                  className="img-fluid rounded-4"
                  priority
                />
                <div className="about-image-overlay">
                  <div className="experience-badge">
                    <span className="years">5+</span>
                    <span className="text">Years of Excellence</span>
                  </div>
                </div>
              </div>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">150+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
            <div className="about-content">
              <h3 className="about-subtitle">Welcome to Dewi</h3>
              <h2 className="about-title">We Create Digital Experiences That Matter</h2>
              <p className="about-description">
                At Dewi, we believe that great design and technology have the power to transform businesses and create meaningful connections with users. Our team of passionate designers and developers work together to craft digital solutions that not only look stunning but also drive real results.
              </p>

              {/* Interactive Tabs */}
              <div className="about-tabs">
                <div className="tab-navigation" style={{ display: 'flex', gap: '0.3rem', flexWrap: 'nowrap' }}>
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <i className={`bi ${tab.icon}`}></i>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                <div className="tab-content">
                  <div className="tab-pane active">
                    <h4>{tabContent[activeTab as keyof typeof tabContent].title}</h4>
                    <p>{tabContent[activeTab as keyof typeof tabContent].description}</p>
                    <ul className="feature-list">
                      {tabContent[activeTab as keyof typeof tabContent].features.map((feature, index) => (
                        <li key={index}>
                          <i style={{margin: "10px", color: "#4A90E2"}} className="bi bi-check-circle-fill"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


