import AsyncStorage from '@react-native-community/async-storage';

const NOTIFICATION_KEY = '@NOTIFICATION:KEY';

const saveNotifications = async (notification) => {
  try {
    let notifications = await getNotifications();
    console.log(notifications);
    if (notifications === null) notifications = [];
    notifications.push(notification);
    const notificationString = JSON.stringify(notifications);
    await AsyncStorage.setItem(NOTIFICATION_KEY, notificationString);
    return notificationString;
  } catch (err) {
    console.log('Error al guardar notificación');
    return 'Error';
  }
};

const getNotifications = async () => {
  try {
    const notifications = await AsyncStorage.getItem(NOTIFICATION_KEY);
    return JSON.parse(notifications);
  } catch (err) {
    console.log('Error al obtener usuario');
    return 'Error';
  }
};

const deleteNotifications = async () => {
  try {
    await AsyncStorage.removeItem(NOTIFICATION_KEY);
    const notifications = AsyncStorage.getItem(NOTIFICATION_KEY);
    return notifications === null ? 'Usuario removido' : 'Usuario no removido';
  } catch (err) {
    console.log('Error al eliminar usuario');
    return 'Error';
  }
};

export {saveNotifications, deleteNotifications, getNotifications};
