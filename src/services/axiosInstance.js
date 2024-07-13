import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    Appid: "SEKBK1J42EYNC0H",
    Apikey: "24ff0c84141444edad9e9f38110bff4820240713000328036304",
  },
});

export default axiosInstance;