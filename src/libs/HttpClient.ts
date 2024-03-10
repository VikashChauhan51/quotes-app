import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:8080",
});

const HttpClient = {
  get(url: string, params: any = undefined) {
    return httpClient.get(url, { params });
  },
  post(url: string, body: any) {
    return httpClient.post(url, body);
  },
  put(url: string, body: any) {
    return httpClient.put(url, body);
  },
  delete(url: string) {
    return httpClient.delete(url);
  },
  patch(url: string, body: any) {
    return httpClient.patch(url, body);
  },
  options(url: string) {
    return httpClient.options(url);
  },
  head(url: string) {
    return httpClient.head(url);
  },
};

export default HttpClient;
