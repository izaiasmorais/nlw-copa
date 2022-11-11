import axios from "axios";

export const api = axios.create({
  baseURL: "https://nlw-copa-production.up.railway.app/",
});
