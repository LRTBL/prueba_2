import axios from './axios';

export const getTrainings = async () => {
  const response = await axios.get('/rrhh/training');
  return response.data;
};

export const getAdvices = async () => {
  const response = await axios.get('/rrhh/avisos');
  return response.data;
};

export const getEvents = async () => {
  const response = await axios.get('/rrhh/events');
  return response.data;
};

export const getEventById = async (id) => {
  const response = await axios.post(`/rrhh/events/?id=${id}`);
  return response.data;
};

export const getBirthday = async () => {
  const response = await axios.get('/rrhh/birthday');
  return response.data;
};
