import axios from "axios";
const BASE_URL = process.env.REACT_APP_SERVER_URL;
const token = localStorage.getItem("token");

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        'Authorization': `bearer ${token}`
    },
});

export const axiosInstanceWithoutToken = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
})