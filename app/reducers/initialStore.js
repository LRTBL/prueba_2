import {getNotifications} from '../storage/notificationAsyncStorage';

const _initialStore = {
  drawerSelected: null,
  auth: {},
  notifications: null,
};

(async () => {
  const notify = await getNotifications();
  _initialStore.notifications = notify || [];
})();

export default _initialStore;
