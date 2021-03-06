import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {containerGeneral, Colors} from '../styles';
import {HeaderApp, NotFoundData} from '../components';
import optionsMenu from '../data/optionsMenu';
import AppContext from '../AppContext';
import types from '../reducers/types';
import NotificationItem from '../components/NotificationItem';
import {deleteNotifications} from '../storage/notificationAsyncStorage';

const NotificationScreen = ({navigation}) => {
  const {
    app: {notifications},
    dispatch,
  } = React.useContext(AppContext);

  const handleDeleteNotifications = async () => {
    await deleteNotifications();
    dispatch({
      type: types.DELETE_NOTIFICATIONS,
    });
  };
  return (
    <View style={containerGeneral.container}>
      <HeaderApp title="Notificaciones" navigation={navigation} />
      {notifications && notifications.length !== 0 ? (
        <ScrollView>
          <View style={containerGeneral.margin}>
            <TouchableOpacity
              style={containerGeneral.viewedContainer}
              onPress={handleDeleteNotifications}>
              <Text style={containerGeneral.viewed}>
                Marcar todo como leído
              </Text>
            </TouchableOpacity>
            {notifications.map(({text, type}, key) => {
              const prefix = type.split('/')[0];
              return (
                <NotificationItem
                  key={key}
                  title={optionsMenu[prefix].title}
                  color={optionsMenu[prefix].color}
                  toNavigate={type}
                  text={text}
                  icon={optionsMenu[prefix].icon(18)}
                />
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View style={containerGeneral.indicator}>
          <NotFoundData color={Colors.SECONDARY} />
        </View>
      )}
    </View>
  );
};

export default NotificationScreen;
