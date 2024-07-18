import axios from "axios";

const instance = axios.create({
    baseURL:"https://fakestoreapi.com",
    headers: {
        "Content-Type": "application/json",
        // Authorization: `${localStorage.getItem("token")}`
    },
    timeout: 10000,
})



export  default instance

