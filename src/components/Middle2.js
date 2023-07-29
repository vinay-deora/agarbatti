
import React from 'react';

const Middle2 = () => {
  return (
    <div className=" bg-gray-100 flex flex-col md:flex-row items-center justify-center ">

      <div className="flex-1 p-6 md:p-10 sm:py-10 text-white text-center md:text-left bg-gradient-to-r from-purple-500 to-blue-500">
      
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Welcome to Dhup Agarbatti App</h2>
   
        <p className="text-base md:text-lg leading-relaxed mb-4">
          At Dhup Agarbatti, we believe in spreading the divine fragrance of spirituality
          through our premium incense sticks. Our passion lies in crafting the finest
          agarbattis to elevate your spiritual experiences.
        </p>
      
        <a
          href="/contact"
          className="inline-block bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 border border-black hover:border-black transition-all duration-300"
        >
          Contact Us
        </a>
      </div>

     

<div className="flex-1 animate-zoomInOut  ">
        <img
          className="h-[35rem]  w-full object-cover rounded-lg shadow-lg"
          src="https://img.freepik.com/free-photo/movement-colorful-smoke_1323-195.jpg?size=626&ext=jpg&ga=GA1.2.444956278.1687873270&semt=sph"
          alt="Incense Sticks"
        />
      </div>
    </div>
  );
};

export default Middle2;
