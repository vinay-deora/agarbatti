import React from 'react';

const Middel3 = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
     {/* Attractive Heading */}
       <div className='py-6' >
     <h2 className="text-4xl font-bold mb-4 text-purple-600 text text-center">
        <p className='text-sm '>SHIPPING & SUPPORT</p>
              FOR BETTER <span className="text-blue-600">SERVICE</span>
            </h2>
            </div>
        <div className="lg:flex items-center">
          {/* Left side - Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src="https://img.freepik.com/premium-photo/bowl-incense-with-smoke-coming-out-it_147933-1217.jpg?size=626&ext=jpg&ga=GA1.1.444956278.1687873270&semt=sph"
                alt="About"
                className="rounded-lg w-full h-[45rem] object-cover shadow-lg animate-zoomInOut cursor-pointer transition-all duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xl font-bold"></p>
              </div>
            </div>
          </div>

          {/* Right side - Text */}
          <div className="lg:w-1/2 lg:pl-16 mt-8 lg:mt-0">
            <h2 className="text-4xl font-bold  text-gray-800 mb-4">FREE SHIPPING</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
             Free Shipping Accross India
            </p>
            <h2 className="text-4xl font-bold mb-4 text-gray-800">ONLINE SUPPORT</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
             Free Shipping Accross India
            </p>
            <h2 className="text-4xl font-bold mb-4 text-gray-800">MINIMUM ORDER EX.TAX</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
             Free Shipping Accross India
            </p>
            <a
              href="/contact"
              className="inline-block bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 border border-black hover:border-black transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Middel3;
