'use client'

import { useState } from 'react'
import Image from 'next/image'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: 'bi-geo-alt-fill',
      title: 'Visit Our Office',
      content: '123 Innovation Drive, Tech Valley, CA 94025',
      subtitle: 'Main Headquarters',
      link: '#',
      color: 'var(--text-accent)' 
    },
    {
      icon: 'bi-envelope-fill',
      title: 'Email Us',
      content: 'info@omnifics.io',
      subtitle: 'General Inquiries',
      link: 'mailto:info@omnifics.io',
      color: 'var(--text-accent)'
    },
    {
      icon: 'bi-telephone-fill',
      title: 'Call Us',
      content: '+92 300 9221711',
      subtitle: 'Mon-Fri 9AM-6PM PST',
      link: 'tel:+92 300 9221711',
      color: 'var(--text-accent)'
    },
    {
      icon: 'bi-clock-fill',
      title: 'Response Time',
      content: 'Within 2 hours',
      subtitle: 'Business Hours',
      link: '#',
      color: 'var(--text-accent)'
    }
  ]

  return (
    <section id="contact" className="contact section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Let's Build Something Amazing Together</h2>
        <p>Ready to transform your ideas into reality? Get in touch and let's discuss your next project</p>
      </div>

      <div className="container">
        <div className="row g-5">
          {/* Contact Information */}
          <div className="col-lg-5" data-aos="fade-right" data-aos-delay="100">
            <div 
              style={{
                background: 'linear-gradient(135deg, #273d4e, #1a2a38)',
                borderRadius: '25px',
                padding: '3rem',
                color: 'var(--text-white)',
                height: 'fit-content',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Background Pattern */}
              <div 
                style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '100px',
                  height: '100px',
                  background: 'rgba(234, 146, 35, 0.1)',
                  borderRadius: '50%'
                }}
              ></div>
              <div 
                style={{
                  position: 'absolute',
                  bottom: '-30px',
                  left: '-30px',
                  width: '60px',
                  height: '60px',
                  background: 'rgba(234, 146, 35, 0.1)',
                  borderRadius: '50%'
                }}
              ></div>

              <h3 
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  position: 'relative',
                  zIndex: 2,
                  color: 'var(--text-accent)'
                }}
              >
                Start Your Journey
              </h3>
              
              <p 
                style={{
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  marginBottom: '2.5rem',
                  opacity: 0.9,
                  position: 'relative',
                  zIndex: 2
                }}
              >
                We're passionate about helping businesses grow through innovative digital solutions. 
                Let's discuss how we can help you achieve your goals.
              </p>

              {/* Contact Methods */}
              <div style={{ marginBottom: '2.5rem' }}>
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      marginBottom: '1.5rem',
                      padding: '1rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '15px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                      e.currentTarget.style.transform = 'translateX(5px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                      e.currentTarget.style.transform = 'translateX(0)'
                    }}
                  >
                    <div 
                      style={{
                        width: '50px',
                        height: '50px',
                        background: info.color,
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <i className={`bi ${info.icon}`} style={{ fontSize: '1.2rem', color: '#ffffff' }}></i>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem', color: 'white' }}>
                        {info.title}
                      </h4>
                      <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '0.25rem' }}>
                        {info.subtitle}
                      </p>
                      <a 
                        href={info.link}
                        style={{
                          color: 'var(--text-accent)',
                          textDecoration: 'none',
                          fontSize: '1rem',
                          fontWeight: 500,
                          transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-accent-muted)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-accent)'}
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-accent)' }}>
                  Connect With Us
                </h4>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  {['facebook', 'twitter', 'linkedin', 'instagram'].map((platform) => (
                    <a 
                      key={platform}
                      href="#"
                      style={{
                        width: '45px',
                        height: '45px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: 'var(--text-white)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#EA9223'
                        e.currentTarget.style.transform = 'translateY(-3px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                        e.currentTarget.style.transform = 'translateY(0)'
                      }}
                    >
                      <i className={`bi bi-${platform === 'twitter' ? 'twitter-x' : platform}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7" data-aos="fade-left" data-aos-delay="200">
            <div 
              style={{
                background: '#ffffff',
                borderRadius: '25px',
                padding: '3rem',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(234, 146, 35, 0.1)'
              }}
            >
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Send Us a Message
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                  Fill out the form below and we'll get back to you within 2 hours
                </p>
              </div>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="alert alert-success" role="alert">
                  <i className="bi bi-check-circle"></i>
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="alert alert-danger" role="alert">
                  <i className="bi bi-exclamation-triangle"></i>
                  Oops! Something went wrong. Please try again or contact us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Full Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email Address <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">
                        Subject <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="What is this about?"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        Message <span className="required">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-control"
                        rows={6}
                        placeholder="Tell us about your project or inquiry..."
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn-submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <i className="bi bi-send"></i>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
