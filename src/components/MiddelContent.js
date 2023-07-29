// import React from 'react';

// const MiddelContent = () => {
//   return (
//     <div className="flex items-center justify-center h-screen">
//       {/* Left side - Image */}
//       <div className="flex-1">
//         <img
//           className="h-96 w-96 object-cover rounded-lg"
//           src="https://img.freepik.com/premium-photo/incense-stick-smoldering-wooden-table-room_495423-27894.jpg?size=626&ext=jpg&ga=GA1.1.444956278.1687873270&semt=sph"  // Replace with the actual image URL
//           alt="Dhup Agarbatti App"
//         />
//       </div>

//       {/* Right side - Content */}
//       <div className="flex-1 p-10">
//         <h2 className="text-4xl font-bold mb-4">Welcome to Dhup Agarbatti App</h2>
//         <p className="text-lg text-gray-600 mb-6">
//           Experience the aroma of spirituality with our Dhup Agarbatti app. Connect with the divine
//           and create a peaceful ambiance with our finest collection of incense sticks.
//         </p>
//         <button className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
//           Download Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MiddelContent;
import React from 'react';

const MiddelContent = () => {
    return (
        <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="lg:flex items-center">
            <div className="lg:w-1/2">
              <img
                src="https://img.freepik.com/premium-photo/incense-stick-smoldering-wooden-table-room_495423-27894.jpg?size=626&ext=jpg&ga=GA1.1.444956278.1687873270&semt=sph"
                alt="About"
                className=" rounded-lg  w-full lg:w-auto"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-16 mt-8 lg:mt-0">
  <h2 className="text-4xl font-bold mb-4">INCENSE STICKS</h2>
  <p className="text-gray-700 leading-relaxed mb-4">
  Incense sticks are aromatic biotic materials that allow a fragrant smoke to fill a room when burned. Incense sticks are a mixture of fragrant gums, perfumes, resins, wood powders, herbs and spices. The aroma can be used for many reasons – for how it looks, smells and when combined with aromatic oils the scents can aid meditative practice and relaxation.
  </p>
  {/* <p className="text-gray-700 leading-relaxed mb-4">
    Our team, led by Vinay Deora, is dedicated to creating each agarbatti with utmost
    care and precision. We carefully select natural and aromatic ingredients to
    ensure that every agarbatti carries a sense of tranquility and purity.
  </p>
  <p className="text-gray-700 leading-relaxed mb-4">
    Whether it's for your daily prayers, meditation, or to create a soothing
    atmosphere at home, Dhup Agarbatti offers a wide range of scents to suit
    your preferences.
  </p> */}
 
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
      )
};

export default MiddelContent;
