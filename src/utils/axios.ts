import axios, { AxiosInstance } from "axios";
import configuration from "../config/configuration";

const http: AxiosInstance = axios
  .create({
    baseURL: configuration().app.apiBaseUrl,
    timeout: 5000,
  })

export default http;
