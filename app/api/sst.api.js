import axios from './axios';

export const getAdvisers = async () => {
  const response = await axios.get('/sst/avisos');
  return response.data;
};
