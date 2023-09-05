import axios from "axios";

const BASE_URL = "https://sharpgoalsbackend.onrender.com"
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
const login = async (userData) => {
    const response = await axios.post(`${API_URL}login`, userData);
    console.log("INITIAL POST RESPONSE: ", response)

    // const response = await fixedRequest;

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    };

    return response.data
};

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