// api.ts
import axios from "axios";

const API_URL = "http://localhost:8080/api/v1";

export const getQuotes = async () => {
  const response = await axios.get(`${API_URL}/quotes`);
  return response.data.data;
};

export const getQuote = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}/quote`);
  return response.data;
};

export const createQuote = async (quote: { id: string; message: string }) => {
  const response = await axios.post(`${API_URL}/quote`, quote);
  return response.data;
};

export const updateQuote = async (quote: { id: string; message: string }) => {
  const response = await axios.put(`${API_URL}/${quote.id}/quote`, quote);
  return response.data;
};

export const deleteQuote = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}/quote`);
  return response.data;
};
