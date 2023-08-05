import axios from "axios";

export const fetchData = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    Accept: "application/json",
  },
});
