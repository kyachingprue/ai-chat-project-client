import React from 'react';

const Home = () => {
  return (
    <section>
      <h3 className='text-center py-10 text-4xl font-bold '>Hello World</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 w-10/12 mx-auto'>
        <div className='w-full justify-center items-center border-b border-gray-300 p-5 rounded-md shadow-md hover:shadow-2xl shadow-blue-300 transition duration-300'>
          <h3 className='text-3xl font-bold text-pink-700 text-center py-4'>This is Home pages</h3>
          <p className='text-base py-3 text-gray-700 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis molestias dolorem voluptate asperiores obcaecati dolor, eius deleniti natus alias eum exercitationem debitis delectus enim minus aliquam, aperiam laborum sit vel?</p>
          <div className='w-full flex flex-col md:flex-row justify-between items-center gap-3'>
            <button className='bg-pink-300 text-gray-800 py-1.5 px-4 rounded-md hover:bg-pink-400 hover:text-gray-700 shadow hover:shadow-lg'>View Details</button>
            <button className='bg-blue-300 text-gray-800 py-2 px-4 rounded-md hover:text-gray-700 hover:bg-blue-400 shadow hover:shadow-lg'>Click Now</button>
          </div>
        </div>
        <div className='w-full justify-center items-center borde-b border-gray-300 p-5 rounded-md shadow-md hover:shadow-2xl shadow-blue-300 transition duration-300'>
          <h3 className='text-3xl font-bold text-pink-700 text-center py-4'>This is Home pages</h3>
          <p className='text-base py-3 text-gray-700 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis molestias dolorem voluptate asperiores obcaecati dolor, eius deleniti natus alias eum exercitationem debitis delectus enim minus aliquam, aperiam laborum sit vel?</p>
          <div className='w-full flex flex-col md:flex-row justify-between items-center gap-3'>
            <button className='bg-pink-300 text-gray-800 py-1.5 px-4 rounded-md hover:bg-pink-400 hover:text-gray-700 shadow hover:shadow-lg'>View Details</button>
            <button className='bg-blue-300 text-gray-800 py-2 px-4 rounded-md hover:text-gray-700 hover:bg-blue-400 shadow hover:shadow-lg'>Click Now</button>
          </div>
        </div>
        <div className='w-full justify-center items-center border-b border-gray-300 p-5 rounded-md shadow-md hover:shadow-2xl shadow-blue-300 transition duration-300'>
          <h3 className='text-3xl font-bold text-pink-700 text-center py-4'>This is Home pages</h3>
          <p className='text-base py-3 text-gray-700 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis molestias dolorem voluptate asperiores obcaecati dolor, eius deleniti natus alias eum exercitationem debitis delectus enim minus aliquam, aperiam laborum sit vel?</p>
          <div className='w-full flex flex-col md:flex-row justify-between items-center gap-3'>
            <button className='bg-pink-300 text-gray-800 py-1.5 px-4 rounded-md hover:bg-pink-400 hover:text-gray-700 shadow hover:shadow-lg'>View Details</button>
            <button className='bg-blue-300 text-gray-800 py-2 px-4 rounded-md hover:text-gray-700 hover:bg-blue-400 shadow hover:shadow-lg'>Click Now</button>
          </div>
        </div>
      </div>
   </section>
  );
};

export default Home;