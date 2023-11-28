import axios from "axios";


export const getStoneList = () => {
  return axios.get("http://localhost:5001/get");
};

export const getStoneTypeData = () => {
  return axios.get("https://localhost:5001/stonetypes");
};

export const getDetailedStoneInfo = (stoneId) => {
  return axios.get(`http://localhost:5001/get/${stoneId}`);
};