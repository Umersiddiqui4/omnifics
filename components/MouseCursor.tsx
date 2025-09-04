'use client'

import { useEffect, useState } from 'react'

interface MouseCursorProps {
  className?: string
}

export default function MouseCursor({ className = '' }: MouseCursorProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
      
      // Hide cursor after mouse stops moving
      clearTimeout(timeout)
      timeout = setTimeout(() => setIsVisible(false), 2000)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseDown = () => {
      setIsClicking(true)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    const handleLinkHover = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a, button')) {
        setIsHovering(true)
      }
    }

    const handleLinkLeave = () => {
      setIsHovering(false)
    }

    // Add event listeners
    document.addEventListener('mousemove', updatePosition)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleLinkHover)
    document.addEventListener('mouseout', handleLinkLeave)

    // Hide default cursor only when custom cursor is visible
    const hideDefaultCursor = () => {
      if (isVisible) {
        document.body.style.cursor = 'none'
      }
    }

    const showDefaultCursor = () => {
      document.body.style.cursor = 'auto'
    }

    // Initial cursor state
    if (isVisible) {
      hideDefaultCursor()
    }

    return () => {
      document.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleLinkHover)
      document.removeEventListener('mouseout', handleLinkLeave)
      
      // Restore default cursor
      showDefaultCursor()
      clearTimeout(timeout)
    }
  }, [isVisible])

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null
  }

  if (!isVisible) return null

  return (
    <>
      {/* Main Cursor */}
      <div
        className={`custom-cursor ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''} ${className}`}
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="cursor-dot"></div>
        <div className="cursor-ring"></div>
      </div>

      {/* Trailing Cursor */}
      <div
        className="cursor-trail"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)'
        }}
      ></div>
    </>
  )
}
