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
      description: "To deliver innovative, reliable, and scalable IT solutions that empower businesses to achieve digital excellence.",
      features: [
        'Putting client success at the heart of every solution.',
        'Delivering consistent, high-quality solutions that businesses can depend on.',
        'Building flexible systems designed to evolve with business needs.',
        'Enabling organizations to thrive in today’s competitive digital landscape.'
      ]
    },
    vision: {
      title: 'Leading Digital Innovation',
      description: 'To be a leading technology partner, driving digital transformation and shaping a smarter, connected future.',
      features: [
        'Building long-term relationships through expertise and commitment.',
        'Empowering businesses with innovative solutions for the modern era.',
        'Leveraging advanced technologies to create intelligent ecosystems.',
        'Enabling seamless integration and connectivity across people, systems, and businesses.'
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
          <div className="col-lg-6 col-md-12" data-aos="fade-right" data-aos-delay="100">
            <div className="about-image-wrapper">
              <div className="about-image">
                <Image
                  src="/assets/img/about.jpg"
                  alt="About Us"
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

          <div className="col-lg-6 col-md-12" data-aos="fade-left" data-aos-delay="200">
            <div className="about-content">
              <h3 className="about-subtitle">Welcome to Omnifics</h3>
              <h2 className="about-title">We Create Digital Experiences That Matter</h2>
              <p className="about-description">
              Omnifics is a technology solutions company specializing in
software development, resource augmentation, and IT
infrastructure deployments, helping businesses adapt and
thrive in the digital era.
</p>

              {/* Interactive Tabs */}
              <div className="about-tabs">
                <div className="tab-navigation" style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap', overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  <style jsx>{`
                    .tab-navigation::-webkit-scrollbar {
                      display: none;
                    }
                    @media (max-width: 768px) {
                      .tab-navigation {
                        flex-wrap: nowrap;
                        justify-content: flex-start;
                      }
                      .tab-button {
                        min-width: 200px;
                        flex-shrink: 0;
                      }
                    }
                    @media (min-width: 769px) {
                      .tab-navigation {
                        flex-wrap: wrap;
                        justify-content: center;
                      }
                      .tab-button {
                        min-width: auto;
                        flex: 1;
                        max-width: 300px;
                      }
                    }
                  `}</style>
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


