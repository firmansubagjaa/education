import axios from "axios";

export const api = axios.create({
  baseURL: "http://103.183.75.112/api/",
});
