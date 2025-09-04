'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('*')
  const [isLoading, setIsLoading] = useState(true)
  const isotopeRef = useRef<any>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const filters = [
    { key: '*', label: 'All', icon: 'bi-grid' },
    { key: '.web', label: 'Web Design', icon: 'bi-laptop' },
    { key: '.app', label: 'Mobile Apps', icon: 'bi-phone' },
    { key: '.branding', label: 'Branding', icon: 'bi-palette' },
    { key: '.marketing', label: 'Marketing', icon: 'bi-graph-up' }
  ]

  const portfolioItems = [
    {
      id: 1,
      category: 'web',
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with advanced features',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      client: 'TechCorp',
      date: '2024',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      demo: '#'
    },
    {
      id: 2,
      category: 'app',
      title: 'Fitness Tracker App',
      description: 'Mobile app for tracking workouts and health metrics',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      client: 'FitLife',
      date: '2024',
      technologies: ['React Native', 'Firebase', 'Redux'],
      link: '#',
      demo: '#'
    },
    {
      id: 3,
      category: 'branding',
      title: 'Corporate Identity',
      description: 'Complete brand identity design for startup',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
      client: 'StartupXYZ',
      date: '2024',
      technologies: ['Logo Design', 'Brand Guidelines', 'Marketing Materials'],
      link: '#',
      demo: '#'
    },
    {
      id: 4,
      category: 'web',
      title: 'Portfolio Website',
      description: 'Professional portfolio website for creative agency',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
      client: 'CreativeAgency',
      date: '2024',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      link: '#',
      demo: '#'
    },
    {
      id: 5,
      category: 'marketing',
      title: 'Digital Campaign',
      description: 'Comprehensive digital marketing campaign',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=400&h=300&fit=crop',
      client: 'MarketingPro',
      date: '2024',
      technologies: ['SEO', 'Social Media', 'Content Strategy'],
      link: '#',
      demo: '#'
    },
    {
      id: 6,
      category: 'app',
      title: 'Food Delivery App',
      description: 'Food delivery platform with real-time tracking',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      client: 'FoodExpress',
      date: '2024',
      technologies: ['Flutter', 'Node.js', 'PostgreSQL'],
      link: '#',
      demo: '#'
    }
  ]

  useEffect(() => {
    // Initialize Isotope
    if (typeof window !== 'undefined') {
      const initIsotope = async () => {
        try {
          const Isotope = await import('isotope-layout')
          const imagesLoaded = await import('imagesloaded')

          if (gridRef.current && !isotopeRef.current) {
            imagesLoaded.default(gridRef.current, () => {
              if (gridRef.current) {
                isotopeRef.current = new Isotope.default(gridRef.current, {
                  itemSelector: '.portfolio-item',
                  layoutMode: 'masonry',
                  transitionDuration: '0.6s',
                  stagger: 30,
                  initLayout: false
                })
                
                // Trigger layout after initialization
                setTimeout(() => {
                  if (isotopeRef.current) {
                    isotopeRef.current.layout()
                  }
                }, 100)
                
                setIsLoading(false)
              }
            })
          }
        } catch (error) {
          console.error('Failed to initialize Isotope:', error)
          setIsLoading(false)
        }
      }

      initIsotope()
    }

    return () => {
      if (isotopeRef.current) {
        isotopeRef.current.destroy()
        isotopeRef.current = null
      }
    }
  }, [])

  const handleFilter = (filterKey: string) => {
    setActiveFilter(filterKey)

    if (isotopeRef.current) {
      if (filterKey === '*') {
        isotopeRef.current.arrange({ filter: '*' })
      } else {
        isotopeRef.current.arrange({ filter: filterKey })
      }
    }
  }

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Our Portfolio</h2>
          <p>Explore our latest work and see how we've helped businesses achieve their digital goals</p>
        </div>

        {/* Portfolio Filters */}
        <div className="portfolio-filters-wrapper" data-aos="fade-up" data-aos-delay="100">
          <div className="portfolio-filters">
            {filters.map((filter) => (
              <button
                key={filter.key}
                className={`filter-button ${activeFilter === filter.key ? 'active' : ''}`}
                onClick={() => handleFilter(filter.key)}
              >
                <i className={`bi ${filter.icon}`}></i>
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-content-wrapper" data-aos="fade-up" data-aos-delay="200">
          {isLoading && (
            <div className="portfolio-loading">
              <div className="loading-spinner"></div>
              <p>Loading portfolio...</p>
            </div>
          )}
          
          <div 
            ref={gridRef}
            className={`portfolio-grid ${isLoading ? 'loading' : ''}`}
          >
            {portfolioItems.map((item) => (
              <div 
                key={item.id} 
                className={`portfolio-item ${item.category}`}
                data-aos="fade-up"
                data-aos-delay={item.id * 100}
              >
                <div className="portfolio-content">
                  <div className="portfolio-image">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="img-fluid"
                    />
                    <div className="portfolio-overlay">
                      <div className="portfolio-actions">
                        <Link href={item.demo} className="portfolio-action" title="View Demo">
                          <i className="bi bi-eye"></i>
                        </Link>
                        <Link href={item.link} className="portfolio-action" title="View Details">
                          <i className="bi bi-link-45deg"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="portfolio-info">
                    <div className="portfolio-category">
                      <span className="category-badge">{item.category}</span>
                    </div>
                    <h4 className="portfolio-title">{item.title}</h4>
                    <p className="portfolio-description">{item.description}</p>
                    
                    <div className="portfolio-meta">
                      <div className="meta-item">
                        <i className="bi bi-person"></i>
                        <span>{item.client}</span>
                      </div>
                      <div className="meta-item">
                        <i className="bi bi-calendar"></i>
                        <span>{item.date}</span>
                      </div>
                    </div>
                    
                    <div className="portfolio-technologies">
                      {item.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio CTA */}
        <div className="portfolio-cta text-center" data-aos="fade-up" data-aos-delay="400">
          <h3>Ready to Start Your Project?</h3>
          <p>Let's discuss how we can bring your vision to life</p>
          <Link href="#contact" className="btn-portfolio-cta">
            <span>Start Your Project</span>
            <i className="bi bi-rocket"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}
