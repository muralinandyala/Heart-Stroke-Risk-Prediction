import axios from "axios";

const API = axios.create({
    baseURL: "https://heart-stroke-risk-prediction.onrender.com", // Update with deployed backend URL
    headers: { "Content-Type": "application/json" },
});

export default API;
