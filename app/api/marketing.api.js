import axios from './axios';

export const getInformation = async () => {
  const response = await axios.get('/mkt/info');
  return response.data;
};

export const getPromotionsCorporatives = async () => {
  const response = await axios.get('/mkt/promotions/v-corporativas');
  return response.data;
};

export const getPromotions = async (type, subtype) => {
  const response = await axios.get(`/mkt/promotions/${type}/?type=${subtype}`);
  return response.data;
};

export const getPromotionsById = async (id) => {
  const response = await axios.post(`/mkt/promotions/retail/?id=${id}`);
  return response.data;
};
