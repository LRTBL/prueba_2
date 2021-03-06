import axios from './axios';

export const resetPassword = async (idPerson, userName, password) => {
  const response = await axios.put('/register', {
    id_persona: idPerson,
    usuario: userName,
    clave: password,
  });
  return response.data;
};

export const verifyCode = async (codigo) => {
  const response = await axios.post('/register/verifycod', {
    codigo,
  });
  return response.data;
};

export const sendEmailCode = async (name, email) => {
  const response = await axios.post('/register/send', {
    name,
    email,
  });
  return response.data;
};

export const signIn = async (code, password) => {
  const response = await axios.post('/login', {
    usuario: code,
    clave: password,
  });
  return response.data;
};
