import axios from './axios';

export const getQuality = async () => {
  const response = await axios.get('/quality/recomendaciones');
  return response.data;
};

export const getConcourse = async () => {
  const response = await axios.get('/quality/events');
  return response.data;
};

export const getConcourseById = async (id) => {
  const response = await axios.post(`/quality/events/?id=${id}`);
  return response.data;
};

export const getResponsability = async () => {
  const response = await axios.get('/quality/rse');
  return response.data;
};

export const getProcess = async () => {
  const response = await axios.get('/quality/process');
  return response.data;
};
