import React from "react";
import Navbar from "./NavBar";
import Carousel from "./Crousel";
import { carDetails } from "./config";
import Card from "./Card";
import MiddelContent from "./MiddelContent";
import Middle2 from "./Middle2";
import Middel3 from "./Middel3";
const Body = () => {
  return (
    <div>
      <div>
        <Carousel />
      </div>
      <div>
        <div className="text-center py-8">
          <p className="mt-4 text-lg text-gray-600">BEST SELLERS</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            <span className="text-green-600">INCENSE</span> &amp;{" "}
            <span className="text-blue-600">DHOOP</span>
          </h1>
        </div>
        <div className="flex flex-wrap justify-evenly">
          {carDetails.map((item) => (
            <Card {...item} />
          ))}
        </div>
      </div>
      <div>
        <MiddelContent />
      </div>
      <div>
        {" "}
        <Middle2 />
      </div>
      <div>
        <Middel3 />
      </div>
    </div>
  );
};

export default Body;
