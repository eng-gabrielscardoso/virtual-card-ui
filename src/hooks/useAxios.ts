import { useEffect, useState } from "react";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import configuration from "../config/configuration";

axios.defaults.baseURL = configuration().app.apiBaseUrl;

type UseAxiosProps = {
  url: string;
  method: keyof AxiosInstance;
  body?: AxiosRequestConfig["data"];
  headers?: AxiosRequestConfig["headers"];
};

type UseAxiosResponse = {
  response: AxiosResponse;
  error: unknown;
  loading: boolean;
};

export default function useAxios({
  url,
  method,
  body,
  headers,
}: UseAxiosProps): UseAxiosResponse {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = () => {
    axios({
      method,
      url,
      data: body,
      headers,
    })
      .then((response: AxiosResponse) => {
        setResponse(response.data);
      })
      .catch((error: unknown) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [method, url, body, headers]);

  return { response, error, loading } as UseAxiosResponse;
}
