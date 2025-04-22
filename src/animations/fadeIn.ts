import { gsap } from 'gsap'

export const fadeIn = (element: HTMLElement, duration = 0.5) => {
  gsap.fromTo(element, 
    { opacity: 0 }, 
    { opacity: 1, duration }
  )
}