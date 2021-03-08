import axios from "axios";
import Color from "../color";

let [currentLat, currentLong] = [null, null];

export const getUserPosition = () => {
  navigator.geolocation.getCurrentPosition(
    //@ts-ignore
    (position) => {
      const location = JSON.stringify(position);
      console.log("my location is", location);
      const {
        coords: { latitude, longitude },
      } = position;
      [currentLat, currentLong] = [latitude, longitude];
    },
    (error) => {
      console.log(error.message);
      return Promise.reject(error);
    },
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );
};

export const splitLatLongStr = (latLong) => {
  const [strLat, strLong] = latLong?.split(",");
  const [latitude, longitude] = [+strLat, +strLong];
  return { latitude, longitude };
};

export const getDistanceByLatLong = (
  lat1,
  lon1,
  lat2 = currentLat,
  lon2 = currentLong,
  unit = "K"
) => {
  if (!lat2 || !lon2) return;
  if (lat1 == lat2 && lon1 == lon2) {
    return 0;
  } else {
    //console.log("lt is", lat2);
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") {
      dist = dist * 1.609344;
    }
    if (unit == "N") {
      dist = dist * 0.8684;
    }
    return Math.ceil(dist);
  }
};

export const getLocationCheck = () => {
  return axios.get("https://extreme-ip-lookup.com/json/");
};

export const getLocation2 = (callBack) => {
  axios
    .get("https://extreme-ip-lookup.com/json/")
    .then((res) => {
      const data = res.data;
      callBack(data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const checkCurrency = (data) => {
  var FalseCase = "USD";

  var x = ["USD", "ARS", "SOL", "CLP"];

  const found = x.find((element) => element === data);
  return found ? found : FalseCase;
};

export const dataChart = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => Color.LINEAR_CLR_2, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ["Days"], // optional
};
