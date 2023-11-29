import React, { useState, useEffect } from "react";
import { getAllProperties } from "../apis/property-apis";
import { Slider } from "antd";
import { DatePicker, Space } from "antd";
import Propertycard from "./Propertycard";
import Loader from "./Loader";

const Home = () => {
  const [city, setCity] = useState("");
  const [moveInDate, setMoveInDate] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [propertyType, setPropertyType] = useState("");
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filter, setFilter] = useState({
    city: "",
    moveindate: "",
    priceRange: [0, 100000],
    propertytype: "",
  });

  const cities = ["Mumbai", "Sagar", "Delhi", "Bangalore", "Noida"];
  const propertytypeinfo = ["Apartment", "Room", "Single", "Double"];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const propertyData = await getAllProperties({
        city,
        moveInDate,
        priceRange,
        propertyType,
      });
      setProperties(propertyData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handlepropertyTypeChange = (e) => {
    setPropertyType(e.target.value);
  };

  const onPricechange = (value) => {
    setPriceRange(value);
  };
  const onDateChange = (date, dateString) => {
    setMoveInDate(dateString);
  };

  const handleClick = async () => {
    fetchData();
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold my-8 mx-5">
        Search Properties for Rent
      </h1>

      <div className=" bg-gray-200 rounded-xl flex flex-col md:flex-row md:justify-between items-center  space-x-4  py-4 px-2 mx-2">
        <div className="flex flex-col  my-2  p-3">
          <label className="pl-2" htmlFor="cities">
            City
          </label>
          <select
            name="cities"
            id="cities"
            value={city}
            onChange={handleCityChange}
            className="text-lg bg-gray-200 cursor-pointer appearance-none outline-none font-bold p-2"
          >
            <option value="">Select Location</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="border border-b-black md:border-r-black md:h-16 md:w-0 w-[90%]"></div>

        <div className="flex flex-col my-2   p-3  ">
          <p>Available from</p>
          <DatePicker
            inputReadOnly
            placeholder="Select Date"
            className="bg-gray-400"
            onChange={onDateChange}
          />
        </div>

        <div className="border border-b-black md:border-r-black md:h-16 md:w-0 w-[90%]"></div>
        <div className="flex flex-col items-center  my-2  p-3 w-full md:w-60">
          <p>Price</p>
          <Slider
            className="w-full cursor-pointer"
            range
            step={1000}
            max={100000}
            value={priceRange}
            onChange={onPricechange}
          />
        </div>

        <div className="border border-b-black md:border-r-black md:h-16 md:w-0 w-[90%]"></div>
        <div className="flex flex-col   my-2  p-3">
          <label className="pl-2" htmlFor="propertype">
            Property Type
          </label>
          <select
            name="propertype"
            id="propertype"
            value={propertyType}
            onChange={handlepropertyTypeChange}
            className=" bg-gray-200 cursor-pointer appearance-none outline-none font-bold p-2"
          >
            <option value="">Select Property Type</option>
            {propertytypeinfo.map((propertyType, index) => (
              <option key={index} value={propertyType}>
                {propertyType}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden md:block border border-b-black md:border-r-black md:h-16 md:w-0 w-[90%]"></div>
        <button
          onClick={handleClick}
          className="px-6 py-2   bg-purple-500 rounded-2xl"
        >
          Apply
        </button>
      </div>

      <div className="flex flex-wrap justify-around my-8 mx-6">
        {loading ? (
          <Loader />
        ) : (
          properties.map((item) => (
            <div key={item._id} className="w-full sm:w-1/2 md:w-1/3  p-4">
              <Propertycard item={item} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
