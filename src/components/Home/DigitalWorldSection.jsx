import React from 'react';
import socialMediaImage from '../../assets/technoloy.jpg';

const DigitalWorldSection = () => {
  return (
    <section className="py-10 md:py-32 h-full md:min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 w-full">
      <div className="max-w-11/12 mx-auto">
        <button className="uppercase text-sm md:text-base rounded-md bg-white text-blue-950 py-1 px-3 mb-5">
          why choose us
        </button>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Smarter Social Media for a Smarter World
          </h2>
          <button className="bg-white text-blue-950 py-2 px-4 rounded-md hover:bg-gray-200">
            Explore
          </button>
        </div>
        <div className="grid grid-cols-12 justify-center items-center gap-3">
          <div className="col-span-7 w-full h-full lg:h-170 mt-20">
            <img
              src={socialMediaImage}
              className="w-full h-full object-cover rounded-md"
              alt="Social Media Image"
            />
          </div>
          <div className="col-span-5 w-full flex flex-col mt-20 gap-4">
            <div className="px-5 py-7 bg-gray-700 rounded-lg">
              <button className="bg-white text-black px-2 py-1.5 rounded-md">
                01
              </button>
              <h2 className="text-xl text-white py-3">Healthcare expertise</h2>
              <p className="text-gray-300">
                Reachout specializes in healthcare marketing, delivering
                strategies tailored to the unique needs and regulations of the
                medical industry.
              </p>
            </div>
            <div className="px-5 py-7 bg-gray-700 rounded-lg">
              <button className="bg-white text-black px-2 py-1.5 rounded-md">
                02
              </button>
              <h2 className="text-xl text-white py-3">Healthcare expertise</h2>
              <p className="text-gray-300">
                Reachout specializes in healthcare marketing, delivering
                strategies tailored to the unique needs and regulations of the
                medical industry.
              </p>
            </div>
            <div className="px-5 py-7 bg-gray-700 rounded-lg">
              <button className="bg-white text-black px-2 py-1.5 rounded-md">
                03
              </button>
              <h2 className="text-xl text-white py-3">Healthcare expertise</h2>
              <p className="text-gray-300">
                Reachout specializes in healthcare marketing, delivering
                strategies tailored to the unique needs and regulations of the
                medical industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default DigitalWorldSection;

