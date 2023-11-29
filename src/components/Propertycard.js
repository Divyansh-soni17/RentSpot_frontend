import React from "react";

const Propertycard = ({ item }) => {
  return (
    <div className="flex flex-col border border-gray-300 rounded overflow-hidden shadow-md">
      <img className="w-full h-48 object-cover" src={item.imageurl} alt="" />
      <div className="p-4 bg-gray-200">
        <p className="text-lg font-bold text-purple-500">₹{item.rent}/month</p>
        <h2 className="text-xl font-semibold">{item.name}</h2>
        <div className="flex items-center text-gray-600">
          <p>{item.area}</p>
          <p className="mx-1">,</p>
          <p>{item.city}</p>
          <p className="mx-1">,</p>
          <p>{item.country}</p>
        </div>
        <hr className="my-3 border-t border-gray-300" />
        <div className="flex items-center">
          <p>{item.beds} Beds</p>
          <p className="mx-2">|</p>
          <p>{item.bathrooms} Bathrooms</p>
          <p className="mx-2">|</p>
          <p>
            {item.roomheight}X{item.roomwidth}m²
          </p>
        </div>
      </div>
    </div>
  );
};

export default Propertycard;
