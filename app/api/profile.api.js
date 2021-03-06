import axios from './axios';

export const editProfile = async (
  id_persona,
  celular,
  hobbie,
  comida,
  music,
) => {
  const response = await axios.put('/register/perfil', {
    id_persona,
    celular,
    hobbie,
    comida,
    music,
  });
  return response.data;
};

export const editPassword = async (id_persona, pwd_old, pwd_new) => {
  const response = await axios.put('/register/changepsw', {
    id_persona,
    pwd_old,
    pwd_new,
  });
  return response.data;
};
