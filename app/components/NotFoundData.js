import React from 'react';
import {View, Text} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch, faBirthdayCake} from '@fortawesome/free-solid-svg-icons';
import {containerGeneral} from '../styles';

const NotFoundData = ({color, type}) => {
  const message =
    type === 'birthday'
      ? {label: 'Hoy nadie cuemple años', icon: faBirthdayCake}
      : {label: 'No se encontro información', icon: faSearch};
  return (
    <View style={containerGeneral.indicator}>
      <FontAwesomeIcon icon={message.icon} size={50} color={color} />
      <Text style={containerGeneral.notFound}>{message.label}</Text>
    </View>
  );
};

export default NotFoundData;
