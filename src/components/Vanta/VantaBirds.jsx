import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import 'vanta/dist/vanta.birds.min'
import bannerImage from '../../assets/ai.png';

const VantaBirds = () => {
  const vantaRef = useRef(null)
  const vantaEffect = useRef(null)

  useEffect(() => {

    const initVanta = () => {
      if (window.VANTA && !vantaEffect.current) {
        vantaEffect.current = window.VANTA.BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          scale: 1.0,
          scaleMobile: 1.0
        })
      }
    }

    // wait small time for safety
    const timer = setTimeout(initVanta, 100)

    return () => {
      clearTimeout(timer)
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
        vantaEffect.current = null
      }
    }
  }, [])

  return (
    <div
      ref={vantaRef}
      style={{ width: '100%', height: '100vh' }}
      className="relative"
    >
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="text-center text-white max-w-2xl">
          {/* Icon */}
          <div className="animate-bounce transition duration-500">
            <img
              src={bannerImage}
              alt="Banner"
              className="w-12 h-12 md:w-20 md:h-20 mx-auto"
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Build Stunning 3D Web Experiences
          </h1>

          {/* Description */}
          <p className="mt-4 text-gray-300 text-sm md:text-lg leading-relaxed">
            Create modern interactive websites using 3D animation, smooth motion
            design, and next-generation UI/UX experiences that attract users
            instantly.
          </p>

          {/* Button */}
          <div className="mt-8 flex justify-center">
            <button className="relative overflow-hidden text-sm md:text-base py-2 md:py-3 px-4 md:px-6 rounded-xl bg-linear-to-r from-sky-500 via-blue-600 to-purple-600 text-white font-medium shadow-lg transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_25px_rgba(56,189,248,0.6)]">
              {/* Shine Effect */}
              <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition duration-500"></span>

              {/* Moving Light Effect */}
              <span className="absolute -left-20 top-0 h-full w-20 bg-white/20 blur-md rotate-12 transition-all duration-700 group-hover:left-full"></span>

              <span className="relative z-10">Get Started 🚀</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VantaBirds
