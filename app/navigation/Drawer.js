import React from 'react';
import {Text, TouchableOpacity, View, Platform} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon, Avatar} from 'react-native-elements';
import {DrawerSingleButton, DrawerAcordionButton} from '../components/drawer';
import {ModalStepper} from '../components';
import {drawerStyles} from '../styles';
import types from '../reducers/types';
import {deleteUser} from '../storage/userAsyncStorage';
import optionsMenu from '../data/optionsMenu';
import AppContext from '../AppContext';
import firebase from 'react-native-firebase';
import {saveNotifications} from '../storage/notificationAsyncStorage';
import {toNavigateByType} from '../utils/toNavigate';

const DrawerScreen = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const {
    app: {auth},
    dispatch,
  } = React.useContext(AppContext);

  React.useEffect(() => {
    createChannel();
    notificationListener();
    getToken();
  }, []);

  const getToken = async () => {
    const firebaseToken = await firebase.messaging().getToken();
    console.log(firebaseToken);
  };

  const createChannel = () => {
    const channel = new firebase.notifications.Android.Channel(
      'channelId',
      'channelName',
      firebase.notifications.Android.Importance.Max,
    ).setDescription('Description');
    firebase.notifications().android.createChannel(channel);
  };

  const notificationListener = () => {
    firebase.notifications().onNotification(async (notification) => {
      if (Platform.OS === 'android') {
        const localNotification = new firebase.notifications.Notification({
          sound: 'default',
          show_in_fareground: true,
        })
          .setNotificationId(notification.notificationId)
          .setTitle(notification.title)
          .setSubtitle(notification.subtitle)
          .setBody(notification.body)
          .setData(notification.data)
          .android.setChannelId('channelId')
          .android.setPriority(firebase.notifications.Android.Priority.High);
        firebase
          .notifications()
          .displayNotification(localNotification)
          .catch(console.log);
      }
      const notificationSave = {
        type: notification.data.type,
        text: notification.body,
      };
      await saveNotifications(notificationSave);
      dispatch({type: types.ADD_NOTIFICATION, payload: notificationSave});
    });

    firebase.notifications().onNotificationOpened((notification) => {
      const stringNavigate = toNavigateByType(
        notification.notification.data.type,
      );
      navigation.navigate(stringNavigate);
    });

    firebase
      .notifications()
      .getInitialNotification(console.log)
      .then(async (notification) => {
        if (notification) {
          const notificationSave = {
            type: notification.notification.data.type,
            text: notification.notification.data.text,
          };
          await saveNotifications(notificationSave);
          dispatch({type: types.ADD_NOTIFICATION, payload: notificationSave});
          const stringNavigate = toNavigateByType(
            notification.notification.data.type,
          );
          navigation.navigate(stringNavigate);
        }
      })
      .catch(console.log);
  };

  const toggleModal = () => {
    setVisible(!visible);
  };

  const handleLogOut = async () => {
    toggleModal();
    await deleteUser();
    navigation.navigate('LoginScreen');
  };

  return (
    <SafeAreaView style={drawerStyles.container}>
      <ScrollView>
        <View style={drawerStyles.header}>
          <Avatar
            size={50}
            containerStyle={drawerStyles.avatarContainer}
            titleStyle={drawerStyles.avatarTitle}
            rounded
            title={auth.PATERNO[0] + auth.MATERNO[0]}
          />
          <View style={drawerStyles.userNameContainer}>
            <Text style={drawerStyles.userName}>
              {auth.NOMBRE} {auth.PATERNO} {auth.MATERNO}
            </Text>
          </View>
        </View>
        <View style={drawerStyles.containerButtons}>
          {Object.values(optionsMenu).map(
            ({type, title, content, toNavigate, icon}, key) => {
              return type === 'single' ? (
                <DrawerSingleButton
                  key={key}
                  title={title}
                  toNavigate={toNavigate}
                  navigation={navigation}
                  icon={icon}
                />
              ) : (
                <DrawerAcordionButton
                  key={key}
                  index={key}
                  navigation={navigation}
                  icon={icon}
                  title={title}
                  content={content}
                />
              );
            },
          )}
        </View>
        <TouchableOpacity
          style={drawerStyles.logoutButtonContainer}
          onPress={() => {
            navigation.closeDrawer();
            toggleModal();
          }}>
          <Icon name="logout" />
          <Text style={drawerStyles.logoutButtonText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </ScrollView>
      <ModalStepper
        visible={visible}
        toggleModal={toggleModal}
        handleConfirm={handleLogOut}>
        <View style={drawerStyles.overlayContainer}>
          <Text style={drawerStyles.overlayText}>¿Desea desconectarse?</Text>
        </View>
      </ModalStepper>
    </SafeAreaView>
  );
};

export default DrawerScreen;
