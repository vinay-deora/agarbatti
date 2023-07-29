import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="lg:flex items-center">
          <div className="lg:w-1/2">
            <img
              src="https://wallpapercave.com/dwp1x/wp9506296.jpg"
              alt="About"
              className="rounded-lg h-auto w-full lg:w-auto"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-16 mt-8 lg:mt-0">
            <h2 className="text-4xl font-bold mb-4">About Our AgarBatti</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Dhup Agarbatti, your ultimate destination for premium
              incense sticks that spread the divine fragrance of spirituality.
              We are dedicated to crafting the finest agarbattis that elevate
              your spiritual experiences and create a soothing ambiance in your
              surroundings.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our journey began with a passion to bring the essence of
              spirituality into every home. Led by Vinay Deora, our team has put
              their heart and soul into curating a wide range of scents that are
              carefully blended using natural and aromatic ingredients. Each
              agarbatti is handcrafted with utmost care and precision, carrying
              a sense of tranquility and purity that enriches your daily prayers
              and meditation sessions
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

export default About;
