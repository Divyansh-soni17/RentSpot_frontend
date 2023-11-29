import axios from "axios";
const baseUrl = "https://rentspot-backend.onrender.com";

export const getAllProperties = async (filter) => {
  console.log(filter);
  const { data } = await axios.get(baseUrl+"/api/v1/getProperties", {
    params: {
      city: filter?.city,
      moveindate: filter?.moveInDate,
      pricerange: filter.priceRange?.join("-"),
      propertytype: filter?.propertyType,
    },
  });
  return data.properties;
};
