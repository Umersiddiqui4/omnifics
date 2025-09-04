'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <section id="hero" className="hero section dark-background">
      <div className="hero-background">
        <Image 
          src="/assets/img/hero-bg.jpg"
          alt="Hero Background" 
          fill
          priority
          quality={90}
          style={{ 
            objectFit: 'cover', 
            zIndex: -1,
            opacity: isLoaded ? 0.5 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
          onLoad={() => setIsLoaded(true)}
          sizes="100vw"
        />
        
        {/* Fallback background color in case image fails */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, #1a2a38 0%, #273d4e 50%, #1a2a38 100%)',
            zIndex: -2
          }}
        ></div>
      </div>

      <div className="container d-flex flex-column align-items-center">
        <h1 
          className="hero-title" 
          data-aos="fade-up" 
          data-aos-delay="100"
        >
          PLAN. LAUNCH. <span className="text-gradient">GROW.</span>
        </h1>
        
        <p 
          className="hero-subtitle" 
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          Transform your business with cutting-edge digital solutions. We design, develop, and deliver 
          innovative websites and applications that drive real results.
        </p>
        
        <div className="hero-buttons d-flex flex-column flex-md-row gap-3" data-aos="fade-up" data-aos-delay="300">
          <a href="#about" className="btn-get-started">
            <span>Get Started</span>
            <i className="bi bi-arrow-right"></i>
          </a>
          
        </div>

        {/* Enhanced CTA Section */}
        <div className="hero-features mt-4" data-aos="fade-up" data-aos-delay="400">
          <div className="row g-3 justify-content-center">
            <div className="col-auto">
              <div className="feature-badge">
                <i className="bi bi-check-circle-fill"></i>
                <span>Free Consultation</span>
              </div>
            </div>
            <div className="col-auto">
              <div className="feature-badge">
                <i className="bi bi-clock-fill"></i>
                <span>24/7 Support</span>
              </div>
            </div>
            <div className="col-auto">
              <div className="feature-badge">
                <i className="bi bi-award-fill"></i>
                <span>100% Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator" data-aos="fade-up" data-aos-delay="500">
        <div className="scroll-arrow">
          <i className="bi bi-chevron-down"></i>
        </div>
      </div>
    </section>
  )
}
