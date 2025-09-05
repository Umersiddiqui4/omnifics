'use client'

import { useState } from 'react'

export default function Goals() {
  const [hoveredGoal, setHoveredGoal] = useState<number | null>(null)

  const goals = [
    {
      id: 1,
      icon: 'bi-globe',
      title: 'Global Expansion',
      description: 'Expand global presence and partnerships in Europe and Middle East.',
      features: ['Europe Markets', 'Middle East Partnerships', 'International Growth'],
      color: '#4A90E2'
    },
    {
      id: 2,
      icon: 'bi-cpu',
      title: 'Technology Leadership',
      description: 'Strengthen AI, cloud, and cybersecurity practices to meet evolving client demands.',
      features: ['AI Solutions', 'Cloud Services', 'Cybersecurity'],
      color: '#E94B3C'
    },
    {
      id: 3,
      icon: 'bi-people-fill',
      title: 'Client Relationships',
      description: 'Build long-term client relationships through reliable delivery and continuous innovation.',
      features: ['Reliable Delivery', 'Innovation Focus', 'Client Satisfaction'],
      color: '#50C878'
    },
    {
      id: 4,
      icon: 'bi-people',
      title: 'Talent Development',
      description: 'Invest in talent development to create a future-ready workforce.',
      features: ['Skill Development', 'Training Programs', 'Future-Ready Teams'],
      color: '#F39C12'
    }
  ]

  return (
    <section id="goals" className="goals section light-background">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Our Goals</h2>
          <p>Driving innovation and growth through strategic objectives</p>
        </div>

        <div className="row g-4">
          {goals.map((goal, index) => (
            <div
              key={goal.id}
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="goal-item"
                onMouseEnter={() => setHoveredGoal(goal.id)}
                onMouseLeave={() => setHoveredGoal(null)}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '2rem',
                  height: '100%',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transform: hoveredGoal === goal.id ? 'translateY(-10px)' : 'translateY(0)',
                  border: '1px solid rgba(74, 144, 226, 0.1)',
                  textAlign: 'center',
                  position: 'relative'
                }}
              >
                {/* Goal Number Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: goal.color,
                    color: '#ffffff',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    boxShadow: `0 4px 15px ${goal.color}40`
                  }}
                >
                  {goal.id}
                </div>

                {/* Goal Icon */}
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    background: `linear-gradient(135deg, ${goal.color}, ${goal.color}dd)`,
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    transition: 'all 0.3s ease',
                    transform: hoveredGoal === goal.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                >
                  <i
                    className={`bi ${goal.icon}`}
                    style={{
                      fontSize: '2rem',
                      color: '#ffffff'
                    }}
                  ></i>
                </div>

                {/* Goal Title */}
                <h4
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: '#273d4e',
                    marginBottom: '1rem',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {goal.title}
                </h4>

                {/* Goal Description */}
                <p
                  style={{
                    color: '#666',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                    fontSize: '0.95rem'
                  }}
                >
                  {goal.description}
                </p>

                {/* Features */}
                <div style={{ marginBottom: '1.5rem' }}>
                  {goal.features.map((feature, featureIndex) => (
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
                    background: `linear-gradient(135deg, ${goal.color}10, rgba(39, 61, 78, 0.05))`,
                    borderRadius: '20px',
                    opacity: hoveredGoal === goal.id ? 1 : 0,
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