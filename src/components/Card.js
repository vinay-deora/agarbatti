
import React from 'react';

const Card = ({ Name, Weight, Price, img }) => {
  return (
    <div className="card rounded-md  p-4 bg-white">
      <img src={img} alt="" className="w-full h-32 object-cover rounded-t-md" />
      <div className="p-4">
        <div className="text-lg font-bold mb-2">{Name}</div>
        <div className="text-md text-gray-600 mb-2">{Weight}</div>
        <div className="text-lg font-bold text-green-600">{Price}</div>
        {/* <div className="text-sm text-gray-500">{color}</div> */}
      </div>
    </div>
  );
};

export default Card;
