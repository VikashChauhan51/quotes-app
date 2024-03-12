// api.ts
import HttpClient from "../libs/HttpClient";

export const getQuotes = async () => {
  const response = await HttpClient.get(`api/v1/quotes`);
  return response.data.data;
};

export const getQuote = async (id: string) => {
  const response = await HttpClient.get(`$api/v1/${id}/quote`);
  return response.data;
};

export const createQuote = async (quote: { message: string }) => {
  const response = await HttpClient.post(`$api/v1/quote`, quote);
  return response.data;
};

export const updateQuote = async (quote: { id: string; message: string }) => {
  const response = await HttpClient.put(`$api/v1/${quote.id}/quote`, quote);
  return response.data;
};

export const deleteQuote = async (id: string) => {
  const response = await HttpClient.delete(`$api/v1/${id}/quote`);
  return response.data;
};
