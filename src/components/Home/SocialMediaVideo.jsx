import React from 'react'

export default function SocialMediaVideo() {
  return (
    <div className="bg-black min-h-screen w-full">
      <div className="flex py-20 md:py-40 flex-col max-w-10/12 mx-auto md:flex-row gap-5 md:gap-12 items-center justify-between">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-start text-white">
            Watch Our Video
          </h2>
          <p className="text-gray-400 text-sm/5 md:text-base/7 py-5">
            Credibly supply clicks-and-mortar users after interactive data.
            Proactively fashion error-free materials rather than client-focused
            infrastructures. Efficiently disintermediate corporate markets
            before market positioning channels. Monotonectally utilize state of
            the art intellectual capital before go forward processes.
            Phosfluorescently cultivate bleeding-edge interfaces through.
          </p>
          <button
            className="relative overflow-hidden text-sm md:text-base py-2 md:py-3 px-4 md:px-6 rounded-xl bg-linear-to-r from-sky-500 via-blue-600 to-purple-600 text-white font-medium shadow-lg transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_25px_rgba(56,189,248,0.6)]"
          >
            {/* Shine Effect */}
            <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition duration-500"></span>

            {/* Moving Light Effect */}
            <span
              className="absolute -left-20 top-0 h-full w-20 bg-white/20 blur-md rotate-12 transition-all duration-700 group-hover:left-full"
            ></span>

            <span className="relative z-10">Get Started 🚀</span>
          </button>
        </div>
        <div className="flex-1">
          <img
            src="https://i.ibb.co.com/4nb70Chc/A-Quick-Guide-to-Social-Media-Video-Production.jpg"
            alt="social media video banner images"
          />
        </div>
      </div>
    </div>
  )
}
