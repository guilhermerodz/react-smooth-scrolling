// Credits to Akram Khalid
import React, { useEffect, useRef, useCallback } from 'react'

import useWindowSize from './useWindowSize'

interface SmoothProviderProps {
  /**
   * Default ease is `0.1`. More ease means more stiffness.
   */
  ease?: number
  /**
   * Enable distortion
   */
  skew: boolean
}

export const SmoothProvider: React.FC<SmoothProviderProps> = ({
  ease,
  skew,
  children,
  ...props
}) => {
  // Hook to grab window size
  const size = useWindowSize()

  useRef()

  // Ref for parent div and scrolling div
  const app = useRef<HTMLDivElement>(null)
  const scrollContainer = useRef<HTMLDivElement>(null)

  // Configs
  const data = {
    ease: Math.max(0, Math.min(1, ease ?? 0.1)),
    current: 0,
    previous: 0,
    rounded: 0
  }

  // Scrolling
  const skewScrolling = useCallback(() => {
    // Set Current to the scroll position amount
    data.current = window.scrollY
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100

    // Difference between
    const difference = data.current - data.rounded
    const acceleration = difference / size.width
    const velocity = +acceleration
    const skewing = skew ? velocity * 7.5 : 0

    // Assign skew and smooth scrolling to the scroll container
    if (scrollContainer.current?.style) {
      const translate3d = `translate3d(0, -${data.rounded}px, 0)`
      const skewY = `skewY(${skewing}deg)`
      scrollContainer.current.style.transform = translate3d + ' ' + skewY
    }

    // loop vai raf
    requestAnimationFrame(skewScrolling)
  }, [data, size.width])

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(skewScrolling)
  }, [skewScrolling])

  // Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height =
      scrollContainer.current?.getBoundingClientRect().height + 'px'
  }

  // set the height of the body.
  useEffect(() => {
    setBodyHeight()
  }, [size.height])

  return (
    <div ref={app} {...props}>
      <div ref={scrollContainer}>{children}</div>
    </div>
  )
}
