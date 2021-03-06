import AsyncStorage from '@react-native-community/async-storage';

const USER_KEY = '@USER:KEY';

const saveUser = async (user) => {
  try {
    const userString = JSON.stringify(user);
    await AsyncStorage.setItem(USER_KEY, userString);
    return userString;
  } catch (err) {
    console.log('Error al guardar usuario');
    return 'Error';
  }
};

const getUser = async () => {
  try {
    const user = await AsyncStorage.getItem(USER_KEY);
    return JSON.parse(user);
  } catch (err) {
    console.log('Error al obtener usuario');
    return 'Error';
  }
};

const deleteUser = async () => {
  try {
    await AsyncStorage.removeItem(USER_KEY);
    const user = AsyncStorage.getItem(USER_KEY);
    return user === null ? 'Usuario removido' : 'Usuario no removido';
  } catch (err) {
    console.log('Error al eliminar usuario');
    return 'Error';
  }
};

export {saveUser, deleteUser, getUser};
