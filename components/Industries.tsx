'use client'

import { useState } from 'react'

export default function Industries() {
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null)

  const industries = [
    {
      id: 1,
      icon: 'bi-shop',
      title: 'E-Commerce & Retail',
      description: 'Scalable online platforms and integrations.',
      features: ['Online Stores', 'Payment Integration', 'Inventory Management'],
      color: '#4A90E2'
    },
    {
      id: 2,
      icon: 'bi-heart-pulse',
      title: 'Healthcare',
      description: 'Digital health apps and compliance-ready systems.',
      features: ['Health Apps', 'Compliance Systems', 'Patient Management'],
      color: '#E94B3C'
    },
    {
      id: 3,
      icon: 'bi-building',
      title: 'Enterprises & Startups',
      description: 'Flexible solutions tailored to growth stages.',
      features: ['Custom Solutions', 'Scalable Systems', 'Growth Analytics'],
      color: '#50C878'
    },
    {
      id: 4,
      icon: 'bi-book',
      title: 'Education & Learning',
      description: 'E-learning platforms, virtual classrooms, and digital tools that make education more accessible and engaging.',
      features: ['Virtual Classrooms', 'Learning Platforms', 'Digital Tools'],
      color: '#F39C12'
    }
  ]

  return (
    <section id="industries" className="industries section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Industries Served</h2>
          <p>We deliver specialized solutions across diverse sectors</p>
        </div>

        <div className="row g-4">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="industry-item"
                onMouseEnter={() => setHoveredIndustry(industry.id)}
                onMouseLeave={() => setHoveredIndustry(null)}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '2rem',
                  height: '100%',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transform: hoveredIndustry === industry.id ? 'translateY(-10px)' : 'translateY(0)',
                  border: '1px solid rgba(74, 144, 226, 0.1)',
                  textAlign: 'center'
                }}
              >
                {/* Industry Icon */}
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    background: `linear-gradient(135deg, ${industry.color}, ${industry.color}dd)`,
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    transition: 'all 0.3s ease',
                    transform: hoveredIndustry === industry.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                >
                  <i
                    className={`bi ${industry.icon}`}
                    style={{
                      fontSize: '2rem',
                      color: '#ffffff'
                    }}
                  ></i>
                </div>

                {/* Industry Title */}
                <h4
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: '#273d4e',
                    marginBottom: '1rem',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {industry.title}
                </h4>

                {/* Industry Description */}
                <p
                  style={{
                    color: '#666',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                    fontSize: '0.95rem'
                  }}
                >
                  {industry.description}
                </p>

                {/* Features */}
                <div style={{ marginBottom: '1.5rem' }}>
                  {industry.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      style={{
                        background: 'rgba(74, 144, 226, 0.1)',
                        color: '#4A90E2',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        marginRight: '0.5rem',
                        marginBottom: '0.5rem',
                        display: 'inline-block',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#4A90E2'
                        e.currentTarget.style.color = '#ffffff'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(74, 144, 226, 0.1)'
                        e.currentTarget.style.color = '#4A90E2'
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Hover Effect */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${industry.color}10, rgba(39, 61, 78, 0.05))`,
                    borderRadius: '20px',
                    opacity: hoveredIndustry === industry.id ? 1 : 0,
                    transition: 'all 0.4s ease',
                    pointerEvents: 'none'
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