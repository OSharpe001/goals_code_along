import axios from 'axios';

const BASE_URL = "https://sharpgoalsbackend.onrender.com";

// const options = {
//   headers: {
//     // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//     'X-RapidAPI-Host': 'sharpgoalsbackend.onrender.com',
//   }
// };

export const fetchFromAPI = async (url, options) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

export const postToAPI = async (url, ...options) => {
  const { data } = await axios.post(`${BASE_URL}/${url}`, options);
  return data;
};
export const deleteFromAPI = async (url, options) => {
  const { data } = await axios.delete(`${BASE_URL}/${url}`, options);
  return data;
};