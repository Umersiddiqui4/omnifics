'use client'

import { useState } from 'react'

export default function Milestones() {
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null)

  const milestones = [
    {
      year: '2016',
      title: 'Company Inception',
      description: 'Inception of the company, with 2 people, Web development, and IT support services.',
      team: '2 Members',
      services: ['Web Development', 'IT Support'],
      color: '#4A90E2'
    },
    {
      year: '2019',
      title: 'Growth & Expansion',
      description: 'Team grown to 5, Incorporated design and hosting services. Started resource augmentation.',
      team: '5 Members',
      services: ['Design Services', 'Hosting', 'Resource Augmentation'],
      color: '#50C878'
    },
    {
      year: '2022',
      title: 'Technology Evolution',
      description: 'With team of 11, started mobile apps & blockchain development & IT infrastructure solution.',
      team: '11 Members',
      services: ['Mobile Apps', 'Blockchain', 'IT Infrastructure'],
      color: '#F39C12'
    },
    {
      year: '2024',
      title: 'Enterprise Excellence',
      description: 'Expanded to 20+ members, delivering enterprise-grade AI/ML and cloud infrastructure projects for global clients.',
      team: '20+ Members',
      services: ['AI/ML Solutions', 'Cloud Infrastructure', 'Enterprise Projects'],
      color: '#E94B3C'
    }
  ]

  return (
    <section id="milestones" className="milestones section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Our Milestones</h2>
          <p>Our journey of growth and innovation through the years</p>
        </div>

        <div className="row">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="col-lg-6 col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="milestone-card"
                onMouseEnter={() => setHoveredMilestone(index)}
                onMouseLeave={() => setHoveredMilestone(null)}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '2rem',
                  height: '100%',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transform: hoveredMilestone === index ? 'translateY(-10px)' : 'translateY(0)',
                  border: '1px solid rgba(74, 144, 226, 0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Year Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: milestone.color,
                    color: '#ffffff',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    boxShadow: `0 4px 15px ${milestone.color}40`,
                    zIndex: 10
                  }}
                >
                  {milestone.year}
                </div>

                {/* Team Size */}
                <div
                  style={{
                    background: 'rgba(74, 144, 226, 0.1)',
                    color: '#4A90E2',
                    padding: '0.5rem 1rem',
                    borderRadius: '15px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    display: 'inline-block',
                    marginBottom: '1rem'
                  }}
                >
                  {milestone.team}
                </div>

                {/* Title */}
                <h4
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: '#273d4e',
                    marginBottom: '1rem',
                    transition: 'color 0.3s ease',
                    paddingRight: '4rem' // Make room for year badge
                  }}
                >
                  {milestone.title}
                </h4>

                {/* Description */}
                <p
                  style={{
                    color: '#666',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                    fontSize: '0.95rem'
                  }}
                >
                  {milestone.description}
                </p>

                {/* Services */}
                <div style={{ marginBottom: '1rem' }}>
                  <h5
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#273d4e',
                      marginBottom: '0.5rem'
                    }}
                  >
                    Key Services:
                  </h5>
                  <div>
                    {milestone.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        style={{
                          background: `linear-gradient(135deg, ${milestone.color}20, ${milestone.color}10)`,
                          color: milestone.color,
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
                          e.currentTarget.style.background = milestone.color
                          e.currentTarget.style.color = '#ffffff'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = `linear-gradient(135deg, ${milestone.color}20, ${milestone.color}10)`
                          e.currentTarget.style.color = milestone.color
                        }}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${milestone.color}05, rgba(39, 61, 78, 0.02))`,
                    borderRadius: '20px',
                    opacity: hoveredMilestone === index ? 1 : 0,
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