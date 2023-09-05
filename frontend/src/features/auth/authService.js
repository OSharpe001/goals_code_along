import axios from "axios";

// const BASE_URL = "https://newsharpgoal.onrender.com"
const API_URL = "/api/users/";

// REGISTER USER
const register = async (userData) => {
    const response = await axios.post(API_URL, userData);

    console.log("RESPONSE.DATA: ", response.data)
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    };

    return response.data
};

// LOGIN USER
const login = async (userData) => {
    const response = await axios.post(`${API_URL}login`, userData);

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