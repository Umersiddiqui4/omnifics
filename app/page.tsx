'use client'

import { useEffect } from 'react'
import ErrorBoundary from '@/components/ErrorBoundary'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Clients from '@/components/Clients'
import Features from '@/components/Features'
import Industries from '@/components/Industries'
import Goals from '@/components/Goals'
import Milestones from '@/components/Milestones'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollTop from '@/components/ScrollTop'
import Preloader from '@/components/Preloader'
import MouseCursor from '@/components/MouseCursor'

export default function Home() {
  useEffect(() => {
    // Initialize AOS
    if (typeof window !== 'undefined') {
      const initAOS = async () => {
        try {
          const AOS = await import('aos')
          AOS.default.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
          })
        } catch (error) {
          console.error('Failed to initialize AOS:', error)
        }
      }

      initAOS()
    }
  }, [])

  return (
    <ErrorBoundary>
      <MouseCursor />
      <Preloader />
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Services />
        <Clients />
        <Features />
        <Industries />
        <Goals />
        <Milestones />
        <Team />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </ErrorBoundary>
  )
}
