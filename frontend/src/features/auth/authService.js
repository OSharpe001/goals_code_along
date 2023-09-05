// import fetchFromAPI from "fetchFromAPI";
import { fetchFromAPI } from "../utils/fetchFromAPI";


const API_URL = "api/users/";

// REGISTER USER
const register = async (userData) => {
    const response = await fetchFromAPI(API_URL, userData);

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    };

    return response.data
};

// LOGIN USER
const login = async (userData) => {
    const response = await fetchFromAPI(`${API_URL}login`, userData);

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