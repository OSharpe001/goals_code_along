import axios from "axios";

// const BASE_URL = "https://sharpgoalsbackend.onrender.com"
const BASE_URL = "http://localhost:3000"
const API_URL = "/api/users/";

// REGISTER USER
const register = async (userData) => {
    const response = await axios.post(API_URL, userData);

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    };

    return response.data
};
// LOGIN USER
// const login = async (userData) => {
    // const response = await axios.post(`${BASE_URL}${API_URL}login`, userData);
    const login = async (userData) => {
        const data = await axios.post(`${BASE_URL}${API_URL}`, userData);
        console.log("DATA: ", data)
        // return data;
      
      if (login.data) {
            localStorage.setItem("user", JSON.stringify(login.data));
        };
    
        return login.data
    };

    // if (response.data) {
    //     localStorage.setItem("user", JSON.stringify(response.data));
    // };

    // return response.data
// };

// LOGOUT USER
const logout = () => {
    localStorage.removeItem("user");
};

const authService = {
    register,
    logout,
    login,
};

export default authService;