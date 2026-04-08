import React from 'react';

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
          <button className="text-sm md:text-base py-1 md:py-2 px-3 md:px-5 rounded-md border-b-2 transition duration-700 hover:border-b-8 border-blue-400 bg-blue-950 text-white">
            Get Started
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

