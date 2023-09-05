// import fetchFromAPI from "fetchFromAPI";
import { fetchFromAPI } from "../utils/fetchFromAPI";


const API_URL = "api/goals/";

// CREATE NEW GOAL
const createGoal = async (goalData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    };

    const response = await fetchFromAPI.post(API_URL, goalData, config);

    return response.data
};

// GET USER GOAL
const getGoals = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    };

    const response = await fetchFromAPI.get(API_URL, config);

    return response.data
};

// DELETE USER GOAL
const deleteGoal = async (goalId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    };

    const response = await fetchFromAPI.delete(API_URL + goalId, config);

    return response.data
};

const goalService = {
    createGoal,
    getGoals,
    deleteGoal,
};

export default goalService;