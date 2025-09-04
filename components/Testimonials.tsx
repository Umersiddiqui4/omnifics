'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Testimonials() {
  const swiperRef = useRef<HTMLDivElement>(null)
  const swiperInstance = useRef<any>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    // Initialize Swiper
    if (typeof window !== 'undefined') {
      const initSwiper = async () => {
        try {
          const { Swiper } = await import('swiper')
          const { Pagination, Autoplay, EffectFade } = await import('swiper/modules')
          
          if (swiperRef.current && !swiperInstance.current) {
            swiperInstance.current = new Swiper(swiperRef.current, {
              loop: true,
              speed: 800,
              effect: 'fade',
              fadeEffect: {
                crossFade: true
              },
              autoplay: {
                delay: 6000,
                disableOnInteraction: false,
              },
              modules: [Pagination, Autoplay, EffectFade],
              pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
                renderBullet: function (index: number, className: string) {
                  return `<span class="${className} custom-bullet"></span>`
                }
              },
              on: {
                slideChange: function (swiper) {
                  setActiveIndex(swiper.realIndex)
                }
              }
            })
          }
        } catch (error) {
          console.error('Failed to initialize Swiper:', error)
        }
      }

      initSwiper()
    }

    return () => {
      if (swiperInstance.current) {
        swiperInstance.current.destroy()
        swiperInstance.current = null
      }
    }
  }, [])

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      company: 'TechFlow Solutions',
      image: '/assets/img/testimonials/testimonials-1.jpg',
      text: 'Working with this team has been transformative for our business. Their strategic approach to digital solutions helped us increase our online presence by 300% within just 6 months. The level of professionalism and attention to detail is outstanding.',
      rating: 5,
      project: 'E-commerce Platform Redesign',
      results: '300% increase in online sales'
    },
    {
      name: 'Michael Chen',
      position: 'Marketing Director',
      company: 'Global Innovations Inc.',
      image: '/assets/img/testimonials/testimonials-2.jpg',
      text: 'The digital marketing campaign they developed exceeded all our expectations. Their data-driven approach and creative strategies resulted in a 250% boost in lead generation. They truly understand modern marketing dynamics.',
      rating: 5,
      project: 'Digital Marketing Campaign',
      results: '250% increase in lead generation'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Product Manager',
      company: 'StartupHub',
      image: '/assets/img/testimonials/testimonials-3.jpg',
      text: 'From concept to launch, their development team delivered an exceptional mobile app that perfectly captured our vision. The user experience is intuitive, and the performance is outstanding. Highly recommended!',
      rating: 5,
      project: 'Mobile App Development',
      results: '4.8/5 App Store rating'
    },
    {
      name: 'David Thompson',
      position: 'Operations Manager',
      company: 'Manufacturing Plus',
      image: '/assets/img/testimonials/testimonials-4.jpg',
      text: 'Their cloud migration services streamlined our entire operation. We experienced a 40% reduction in IT costs while improving system reliability. The transition was seamless and their support team is always available.',
      rating: 5,
      project: 'Cloud Infrastructure Migration',
      results: '40% reduction in IT costs'
    },
    {
      name: 'Lisa Wang',
      position: 'Creative Director',
      company: 'Design Studio Pro',
      image: '/assets/img/testimonials/testimonials-5.jpg',
      text: 'The rebranding project they delivered perfectly captured our company\'s evolution. Their creative vision and technical execution resulted in a 180% increase in brand recognition. Absolutely phenomenal work!',
      rating: 5,
      project: 'Brand Identity Redesign',
      results: '180% increase in brand recognition'
    }
  ]

  const activeTestimonial = testimonials[activeIndex]

  return (
    <section id="testimonials" className="testimonials section dark-background">
      <Image 
        src="/assets/img/testimonials-bg.jpg" 
        alt="Testimonials Background" 
        fill
        style={{ objectFit: 'cover', zIndex: -1 }}
        className="testimonials-bg"
      />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="section-title text-center mb-5">
          <h2 className="text-white" style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
            What Our Clients Say
          </h2>
          <p className="text-white-muted" style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Real results from real clients. Discover how we've helped businesses transform their digital presence and achieve remarkable growth.
          </p>
        </div>

        <div className="row align-items-center">
          {/* Testimonial Content */}
          <div className="col-lg-8" data-aos="fade-right" data-aos-delay="200">
        <div className="swiper init-swiper" ref={swiperRef}>
          <div className="swiper-wrapper">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="swiper-slide">
                    <div 
                      className="testimonial-item-enhanced"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '25px',
                        padding: '3rem',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      {/* Quote Icon */}
                      <div 
                        style={{
                          position: 'absolute',
                          top: '2rem',
                          right: '2rem',
                          fontSize: '4rem',
                          color: 'rgba(234, 146, 35, 0.3)',
                          fontFamily: 'serif'
                        }}
                      >
                        "
                      </div>

                      {/* Testimonial Text */}
                      <p 
                        className="text-white"
                        style={{
                          fontSize: '1.2rem',
                          lineHeight: 1.8,
                          marginBottom: '2rem',
                          fontStyle: 'italic',
                          position: 'relative',
                          zIndex: 2
                        }}
                      >
                        {testimonial.text}
                      </p>

                      {/* Project Results */}
                      <div 
                        style={{
                          background: 'rgba(234, 146, 35, 0.2)',
                          borderRadius: '15px',
                          padding: '1.5rem',
                          marginBottom: '2rem',
                          border: '1px solid rgba(234, 146, 35, 0.3)'
                        }}
                      >
                        <div className="text-white-light" style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                          Project: {testimonial.project}
                        </div>
                        <div className="text-accent" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                          {testimonial.results}
                        </div>
                      </div>

                      {/* Client Info */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div 
                          style={{
                            width: '70px',
                            height: '70px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '3px solid rgba(234, 146, 35, 0.5)'
                          }}
                        >
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                            width={70} 
                            height={70}
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                          />
                        </div>
                        <div>
                          <h4 className="text-white" style={{ margin: 0, fontSize: '1.3rem', fontWeight: 600 }}>
                            {testimonial.name}
                          </h4>
                          <p className="text-white-muted" style={{ margin: 0, fontSize: '0.95rem' }}>
                            {testimonial.position}
                          </p>
                          <p className="text-accent-muted" style={{ margin: 0, fontSize: '0.9rem', fontWeight: 500 }}>
                            {testimonial.company}
                          </p>
                        </div>
                      </div>

                      {/* Rating Stars */}
                      <div 
                        className="stars"
                        style={{
                          position: 'absolute',
                          bottom: '2rem',
                          left: '2rem',
                          display: 'flex',
                          gap: '0.25rem'
                        }}
                      >
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <i 
                            key={i}
                            className="bi bi-star-fill"
                            style={{ color: '#ffd700', fontSize: '1.2rem' }}
                          ></i>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Panel */}
          <div className="col-lg-4" data-aos="fade-left" data-aos-delay="300">
            <div 
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '25px',
                padding: '2.5rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                textAlign: 'center'
              }}
            >
              <h3 className="text-white" style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '2rem' }}>
                Client Success Metrics
              </h3>
              
              <div style={{ marginBottom: '2rem' }}>
                <div className="text-accent" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                  98%
                </div>
                <div className="text-white-muted" style={{ fontSize: '1rem' }}>
                  Client Satisfaction Rate
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <div className="text-accent" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                  500+
                </div>
                <div className="text-white-muted" style={{ fontSize: '1rem' }}>
                  Projects Completed
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <div className="text-accent" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                  24/7
                </div>
                <div className="text-white-muted" style={{ fontSize: '1rem' }}>
                  Support Available
                </div>
              </div>

              <button
                style={{
                  background: 'linear-gradient(135deg, #EA9223, #E43E2B)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '25px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: '100%'
                }}
              >
                View Case Studies
              </button>
            </div>
          </div>
        </div>

        {/* Custom Pagination */}
        <div 
          className="swiper-pagination"
          style={{
            marginTop: '3rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem'
          }}
        ></div>
      </div>

      {/* Additional CTA Section */}
      <div className="container mt-5" data-aos="fade-up" data-aos-delay="400">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div 
              style={{
                background: 'linear-gradient(135deg, rgba(234, 146, 35, 0.9), rgba(39, 61, 78, 0.9))',
                borderRadius: '25px',
                padding: '3rem 2rem',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <h3 className="text-white" style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-white-muted" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                Let's discuss how we can help transform your business and achieve similar results
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  style={{
                    background: '#ffffff',
                    color: '#EA9223',
                    border: 'none',
                    padding: '1rem 2rem',
                    borderRadius: '25px',
                    fontWeight: 600,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Get Free Consultation
                </button>
                <button
                  style={{
                    background: 'transparent',
                    color: '#ffffff',
                    border: '2px solid #ffffff',
                    padding: '1rem 2rem',
                    borderRadius: '25px',
                    fontWeight: 600,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
