// import React, { useEffect, useState } from "react";
import axios from "axios";
import settings from "../config/settings";

export default  function useAddress ()  {
  const getAddressFromCoordinates = async (latitude, longitude) => {
    const apiUrl = `https://api.openrouteservice.org/geocode/reverse?api_key=${settings.openRouteApiKey}&point.lon=${longitude}&point.lat=${latitude}`;
    try {
      const { data } = await axios.get(apiUrl);
      if (data.features.length > 0) {
        const address = data.features[0].properties.label;
        // console.log("address:",address)
        return address;
      }
      return null;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return getAddressFromCoordinates;
};

