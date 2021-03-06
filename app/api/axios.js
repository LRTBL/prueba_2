import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://10.0.2.2:3000/v1/api',
  // baseURL: 'http://api.footloose.pe:6612/icq01/appcol',
  baseURL: 'http://192.168.1.233:6612/icq01/appcol',
});

// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-type'] = 'application/json';

export default instance;
