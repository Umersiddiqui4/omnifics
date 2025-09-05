'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Team() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)
  const [selectedMember, setSelectedMember] = useState<number | null>(null)

  const teamMembers = [
    {
      name: 'Alexandra Rodriguez',
      position: 'Chief Executive Officer',
      department: 'Executive Leadership',
      image: '/assets/img/team/team-1.jpg',
      bio: 'Visionary leader with 15+ years of experience in digital transformation and strategic business development. Passionate about innovation and driving sustainable growth.',
      expertise: ['Strategic Planning', 'Business Development', 'Team Leadership'],
      experience: '15+ Years',
      education: 'MBA, Stanford University',
      achievements: ['Forbes 30 Under 30', '500% Company Growth'],
      social: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Marcus Chen',
      position: 'Chief Technology Officer',
      department: 'Technology & Innovation',
      image: '/assets/img/team/team-2.jpg',
      bio: 'Tech innovator and software architect with expertise in AI, cloud computing, and scalable systems. Led development of award-winning platforms.',
      expertise: ['AI/ML', 'Cloud Architecture', 'System Design'],
      experience: '12+ Years',
      education: 'MS Computer Science, MIT',
      achievements: ['Tech Innovator Award', '10+ Patents Filed'],
      social: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Sarah Williams',
      position: 'Chief Marketing Officer',
      department: 'Marketing & Growth',
      image: '/assets/img/team/team-3.jpg',
      bio: 'Digital marketing expert specializing in growth strategies, brand development, and customer acquisition. Proven track record of scaling businesses.',
      expertise: ['Growth Marketing', 'Brand Strategy', 'Customer Acquisition'],
      experience: '10+ Years',
      education: 'MBA, Harvard Business School',
      achievements: ['Marketing Excellence Award', '300% Growth Rate'],
      social: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      name: 'David Kim',
      position: 'Head of Design',
      department: 'Creative & UX',
      image: '/assets/img/team/team-1.jpg',
      bio: 'Award-winning designer focused on creating exceptional user experiences and beautiful, functional interfaces that drive engagement.',
      expertise: ['UX/UI Design', 'Brand Identity', 'Design Systems'],
      experience: '8+ Years',
      education: 'BFA Design, Parsons School',
      achievements: ['Design Award Winner', '100+ Projects Delivered'],
      social: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Emily Thompson',
      position: 'Senior Developer',
      department: 'Engineering',
      image: '/assets/img/team/team-2.jpg',
      bio: 'Full-stack developer with expertise in modern web technologies and a passion for clean, maintainable code and optimal performance.',
      expertise: ['React/Next.js', 'Node.js', 'Database Design'],
      experience: '6+ Years',
      education: 'BS Computer Science, UC Berkeley',
      achievements: ['Developer of the Month', 'Open Source Contributor'],
      social: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      name: 'James Wilson',
      position: 'Business Development',
      department: 'Sales & Partnerships',
      image: '/assets/img/team/team-3.jpg',
      bio: 'Strategic business developer with a proven track record of building partnerships and driving revenue growth through innovative solutions.',
      expertise: ['Partnership Development', 'Sales Strategy', 'Market Expansion'],
      experience: '9+ Years',
      education: 'MBA, Wharton School',
      achievements: ['Top Performer Award', '200% Revenue Growth'],
      social: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    }
  ]

  return (
    <section id="team" className="team section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Meet Our Team</h2>
        <p>Passionate professionals dedicated to your success</p>
      </div>

      <div className="container">
        <div className="row gy-5">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
              <div 
                className="member-enhanced"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
                onClick={() => setSelectedMember(selectedMember === index ? null : index)}
                style={{
                  background: '#ffffff',
                  borderRadius: '25px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 50px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transform: hoveredMember === index ? 'translateY(-15px)' : 'translateY(0)',
                  cursor: 'pointer',
                  position: 'relative'
                }}
              >
                {/* Member Image with Overlay */}
                <div 
                  style={{
                    position: 'relative',
                    height: '300px',
                    overflow: 'hidden'
                  }}
                >
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    width={400} 
                    height={400}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                  />
                  
                  {/* Hover Overlay */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.9), rgba(39, 61, 78, 0.8))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: hoveredMember === index ? 1 : 0,
                      transition: 'all 0.4s ease'
                    }}
                  >
                    <div style={{ textAlign: 'center', color: '#ffffff' }}>
                      <div style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem' }}>
                        {member.experience}
                      </div>
                      <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                        of Experience
                      </div>
                    </div>
                  </div>

                  {/* Department Badge */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: 'rgba(74, 144, 226, 0.9)',
                      color: '#ffffff',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {member.department}
                  </div>
                </div>

                {/* Member Info */}
                <div 
                  style={{
                    padding: '2rem',
                    position: 'relative'
                  }}
                >
                  <h4 
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      color: '#273d4e',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {member.name}
                  </h4>
                  
                  <span 
                    style={{
                      color: '#4A90E2',
                      fontWeight: 600,
                      fontSize: '1rem',
                      marginBottom: '1rem',
                      display: 'block'
                    }}
                  >
                    {member.position}
                  </span>

                  {/* Education */}
                  <div 
                    style={{
                      fontSize: '0.9rem',
                      color: '#666',
                      marginBottom: '1rem',
                      padding: '0.5rem 0'
                    }}
                  >
                    <i className="bi bi-mortarboard-fill" style={{ color: '#4A90E2', marginRight: '0.5rem' }}></i>
                    {member.education}
                  </div>

                  {/* Expertise Tags */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        style={{
                          background: 'rgba(74, 144, 226, 0.1)',
                          color: '#4A90E2',
                          padding: '0.3rem 0.8rem',
                          borderRadius: '15px',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          marginRight: '0.5rem',
                          display: 'inline-block',
                          marginBottom: '0.5rem'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div 
                    className="social"
                    style={{
                      display: 'flex',
                      gap: '0.75rem',
                      marginTop: '1rem'
                    }}
                  >
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a 
                        key={platform}
                        href={url}
                        style={{
                          width: '40px',
                          height: '40px',
                          background: 'linear-gradient(135deg, #4A90E2, #87CEEB)',
                          color: '#ffffff',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          transform: hoveredMember === index ? 'scale(1.1)' : 'scale(1)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.2)'
                          e.currentTarget.style.boxShadow = '0 5px 15px rgba(74, 144, 226, 0.4)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = hoveredMember === index ? 'scale(1.1)' : 'scale(1)'
                          e.currentTarget.style.boxShadow = 'none'
                        }}
                      >
                        <i className={`bi bi-${platform === 'twitter' ? 'twitter-x' : platform}`}></i>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Expandable Bio Section */}
                {selectedMember === index && (
                  <div 
                    style={{
                      background: 'rgba(39, 61, 78, 0.05)',
                      padding: '2rem',
                      borderTop: '1px solid rgba(74, 144, 226, 0.1)',
                      animation: 'slideDown 0.3s ease'
                    }}
                  >
                    <p 
                      style={{
                        color: '#666',
                        lineHeight: 1.6,
                        marginBottom: '1.5rem',
                        fontSize: '0.95rem'
                      }}
                    >
                      {member.bio}
                    </p>
                    
                    <div style={{ marginBottom: '1rem' }}>
                      <h6 style={{ color: '#273d4e', fontWeight: 600, marginBottom: '0.5rem' }}>
                        Key Achievements:
                      </h6>
                      <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                        {member.achievements.map((achievement, achievementIndex) => (
                          <li 
                            key={achievementIndex}
                            style={{
                              color: '#666',
                              fontSize: '0.9rem',
                              marginBottom: '0.25rem'
                            }}
                          >
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedMember(null)
                      }}
                      style={{
                        background: 'transparent',
                        color: '#4A90E2',
                        border: '1px solid #4A90E2',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
