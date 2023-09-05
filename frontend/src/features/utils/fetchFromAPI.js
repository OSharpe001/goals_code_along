import axios from 'axios';

const BASE_URL = "https://sharpgoalsbackend.onrender.com";

const options = {
  headers: {
    // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'sharpgoalsbackend.onrender.com',
    "serializedOrigin": "null",
    "Origin": "noreferrer",
    "Sec-Fetch-Mode": "null",
    "Sec-Fetch-Site": "strict-origin",
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

export const postToAPI = async (url) => {
  const { data } = await axios.post(`${BASE_URL}/${url}`, options);
  return data;
};
export const deleteFromAPI = async (url) => {
  const { data } = await axios.delete(`${BASE_URL}/${url}`, options);
  return data;
};