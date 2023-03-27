import axios, { AxiosInstance } from "axios";
import configuration from "../config/configuration";

class HttpService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: configuration().app.apiBaseUrl,
      timeout: 5000,
    });
  }

  public async get(url: string, config?: object) {
    return this.instance.get(url, config);
  };

  public async post(url: string, data?: any, config?: object) {
    return this.instance.post(url, data, config);
  };

  public async put(url: string, data?: any, config?: object) {
    return this.instance.put(url, data, config);
  };

  public async patch(url: string, data?: any, config?: object) {
    return this.instance.put(url, data, config);
  };

  public async delete(url: string, config?: object) {
    return this.instance.delete(url, config);
  };
}

export default new HttpService();
