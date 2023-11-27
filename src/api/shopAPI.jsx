import axios from "axios";
import { API_KEY } from "../config";


const instance = axios.create({
  baseURL: "https://fortniteapi.io/v1/shop?lang=ru",
  withCredentials: false,
  headers: {
    "API-KEY": "7df6d9b6-acc90453-32102901-c3122e3f",
  },
});



export const shopAPI = {
  getItems() {
    return axios.get("https://fortniteapi.io/v1/shop?lang=ru", { headers: { Authorization: API_KEY } }).then(res => res.data.featured);
  },
};


 