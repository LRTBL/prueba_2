import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {toNavigateByType} from '../utils/toNavigate';
import {withNavigation} from 'react-navigation';
import {notificationItemStyles} from '../styles/components';

const NotificationItem = ({
  title,
  text,
  color,
  icon,
  toNavigate,
  navigation,
}) => {
  const handleNavigate = () => {
    const stringNavigate = toNavigateByType(toNavigate);
    navigation.navigate(stringNavigate);
  };
  return (
    <TouchableOpacity
      onPress={handleNavigate}
      style={[notificationItemStyles.container, {borderColor: color}]}>
      <View style={notificationItemStyles.iconLeft}>{icon}</View>
      <View style={notificationItemStyles.containerText}>
        <Text
          style={[
            notificationItemStyles.title,
            {
              color: color,
            },
          ]}>
          {title}
        </Text>
        <Text style={[notificationItemStyles.subtitle, {color: color}]}>
          {text}
        </Text>
      </View>
      <View style={notificationItemStyles.iconRight}>
        <FontAwesomeIcon icon={faChevronRight} size={20} color={color} />
      </View>
    </TouchableOpacity>
  );
};

export default withNavigation(NotificationItem);
